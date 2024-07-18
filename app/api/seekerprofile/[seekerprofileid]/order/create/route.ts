import { connectToDB } from "@/lib/mongodb"
import { OrderModel } from "@/schemas/order"
import { Status } from "@/types"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
    { params }: { params: { seekerprofileid: string}}
)  {

    try {
        const data = await request.json()
        const seekerId = params.seekerprofileid;

        if (!seekerId) {
            return new NextResponse('Seeker not found', { status: 404 })
        }

        await connectToDB()

        const savedOrder = await OrderModel.create({
            seekerId: seekerId,
            agentId: null, // when seeker creates an order from job page on dashboard, they will not be connected to an agent yet
            tier: data.tier,
            numApps: data.numApps,
            numAppsCompleted: 0, // no apps completed yet due to new order
            status: Status.InProgress, // new order so inprogress
        })

        return NextResponse.json({
            message: "order created",
            order: savedOrder
        })


    } catch (error) {
        console.log("error in saving order: ")
        console.log(error);
        return new NextResponse("Failed to save order: " + error,  { status: 500})
    }
}