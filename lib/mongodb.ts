// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient, ObjectId } from "mongodb"
import mongoose, { Mongoose } from 'mongoose'
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
type MongoClientType = MongoClient | mongoose.mongo.MongoClient
let client: MongoClientType

let globalWithMongo = global as typeof globalThis & {
    _mongooseClient?: Mongoose
}

export const clientPromise = async () => {
    await connectToDB()

    return Promise.resolve<MongoClientType>(client)
}

export const connectToDB = async () => {

    if (process.env.NODE_ENV === 'development') {

        if (!globalWithMongo._mongooseClient) {
            globalWithMongo._mongooseClient = await mongoose.connect(uri)
        }

        client = globalWithMongo._mongooseClient.connection.getClient()
    } else {
        let _client = await mongoose.connect(uri)
        client = _client.connection.getClient()
    }
}

export const updateUserBalance = async (seekerid: string, amount: number, credits: number, transactionId: string) => {
    try {
        console.log(`Updating user balance for hostid: ${seekerid}, amount: ${amount}, credits: ${credits}, transactionId: ${transactionId}`);

        const client = await clientPromise()
        const database = client.db('test')
        const collection = database.collection('seekerprofiles')
        
        const filter = { hostid: new ObjectId(seekerid) }
        const update = { $inc: { numCredits: credits }, $set: { lastTransactionId: transactionId } }
        // const result = await collection.updateOne(filter, update)
        const document = await collection.findOne(filter);
        if (!document) {
            throw new Error(`No document found with hostid: ${seekerid}`);
        }
        if (document.lastTransactionId === transactionId) { //Credits already applied for this transaction.
            return; 
        }
        if (document.numCredits === undefined) { //numCredits field does not exist, initializing it"
            const updateWithNumCredits = { $set: { numCredits: credits } };
            const result = await collection.updateOne(filter, updateWithNumCredits);
        } else {
            //numCredits field exists, updating it");
            const result = await collection.updateOne(filter, update);
        }
    } catch (error) {
        console.error('Failed to update user balance:', error);
        throw error;
    }
}