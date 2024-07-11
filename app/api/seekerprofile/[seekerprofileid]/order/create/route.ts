import { connectToDB } from "@/lib/mongodb"
import { OrderModel } from "@/schemas/order"
import { Order } from "@/types"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
    { params }: { params: { seekerprofileid: string}}
)  {

    try {

        const formData: FormData = await request.formData()

        const data = formData.get('data') as string
        const dataJson = JSON.parse(data)
        const order = dataJson.order as Order
        const seekerId = params.seekerprofileid;

        if (!seekerId) {
            return new NextResponse('Seeker not found', { status: 404 })
        }

        await connectToDB()

        const savedOrder = await OrderModel.create({
            seekerid: seekerId,
            agentid: null, // when seeker creates an order from job page on dashboard, they will not be connected to an agent yet
            tier: order.tier,
            numApps: order.numApps,
            status: order.status,
        })

        return NextResponse.json({
            message: "order created",
            order: savedOrder
        })


    } catch (error) {
        return new NextResponse("Failed to save order: " + error,  { status: 500})
    }
}