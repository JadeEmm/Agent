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

// patch
export async function PATCH(
    req: Request,
    { params } : { params: { agentid: string }}
) {

    try {
    await connectToDB()

    const body = await req.json()

    const { 
        agentId,
        agentName, 
        agentDescription,
        photos,
        status,
        orders
        } = body;

        const agent = await AgentModel.findById<Agent>(params.agentid)

        if (!agent) {
            return new NextResponse("agent not found", { status: 404 })
        }

        agent.agentId = agentId
        agent.name = agentName
        agent.description = agentDescription        
        agent.photos = photos
        agent.status = status ? ItemStatus.LISTED : ItemStatus.UNLISTED
        agent.orders = orders

        await agent.save()

        return NextResponse.json({
            message: "Agent updated"
        })
    } catch(error) {
        console.log(error)
        return new NextResponse("Server error: " + error, { status: 500})
    }

}