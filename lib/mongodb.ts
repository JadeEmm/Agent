// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb"
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

export const updateUserBalance = async (seekerid: string, amount: number, credits: number) => {
    try {
        const client = await clientPromise()
        const database = client.db('test')
        const collection = database.collection('seekerprofiles')

        const filter = { hostid : new Object(seekerid) } 
        const update = { $inc: { numCredits: credits } }
        console.log(seekerid, "seekerid")
        const result = await collection.updateOne(filter, update)
        if (result.matchedCount === 0) {
            throw new Error(`No document found with _id: ${seekerid}`)
        }
        console.log(`Successfully updated user balance for hostid: ${seekerid}`, result.numCredits)
    } catch (error) {
        console.error('Failed to update user balance:', error)
        throw error
    }
}