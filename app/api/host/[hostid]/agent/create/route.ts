import { connectToDB } from "@/lib/mongodb"
import { AgentModel } from "@/schemas/agent"
import { Agent } from "@/types"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
    { params }: { params: { hostid: string}}
)  {

    try {

        const formData: FormData = await request.formData()

        const data = formData.get('data') as string
        const dataJson = JSON.parse(data)
        const agentId  = params.hostid
        const agent = dataJson.agent as Agent

        if (!agentId) {
            return new NextResponse('Agent not found', { status: 404 })
        }

        await connectToDB()

        const savedAgentProfile = await AgentModel.create({ // orders null be default
            agentId: agentId,
            name: agent.name,
            description: agent.description,
            photos: agent.photos ?? [],
        })

        return NextResponse.json({
            message: "Profile created",
            agent: savedAgentProfile
        })


    } catch (error) {
        console.log(error)
        return new NextResponse("Failed to create agent profile: " + error,  { status: 500})
    }
}