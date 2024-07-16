import { storageRef } from "@/lib/firebase";
import { connectToDB } from "@/lib/mongodb";
import { AgentModel } from "@/schemas/agent";
import { Agent, ItemStatus } from "@/types";
import { deleteObject } from "firebase/storage";
import { NextResponse } from "next/server";

// delete
export async function DELETE(
    req: Request,
    { params }: { params: { agentid: string }}
) {

    try {
        await connectToDB()

        const agentId = params.agentid
    
        let deleteResult = await AgentModel.findByIdAndDelete(agentId)
    
        if (deleteResult) {
            let agent = (deleteResult as unknown) as Agent
            
            if (agent.photos) {
                await Promise.all(agent.photos.map(async photo => {
                    const ref = storageRef(photo)
                    await deleteObject(ref)
                }))
            }
    
            return NextResponse.json({
                message: "agent deleted"
            })
        } else {
            return NextResponse.json({ message: "agent not found"})
        }
    } catch (error) {
        console.log(error)
        return new NextResponse("Server error: " + error, { status: 500})
    }

}

// POST
// TO CREATE A NEW AGENT PROFILE OR EDIT AN EXISTING ONE
export async function POST(req: Request, { params } : { params: { agentid: string }}) {

    try {

        const agentId = params.agentid // agentid is the user id of the user who is creating the agent profile
        const body = await req.json();

        console.log('POST agent profile', agentId, body)

        if (!agentId) {
            return new NextResponse('Host not found', { status: 404 })
        }

        await connectToDB()

        // check if existing profile based on agentid
        const existingProfile = await AgentModel.findOne({ agentId })

        let agentProfile;

        if (existingProfile) {
            // Update existing profile
            console.log('Updating existing agent profile')
            agentProfile = await AgentModel.findOneAndUpdate({ agentId }, body, { new: true });
        } else {
            // Create new profile
            console.log('Creating new agent profile')
            agentProfile = await AgentModel.create({...body, orders: [], agentId});
        }

        return NextResponse.json({
            message: existingProfile ? "Agent profile updated" : "Agent profile created",
            agentProfile
        })

    } catch(error) {
        console.log(error)
        return new NextResponse("Server error: " + error, { status: 500})
    }

}