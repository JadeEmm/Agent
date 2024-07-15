import { connectToDB } from "@/lib/mongodb";
import { OrderModel } from "@/schemas/order";
import { Order } from "@/types";
import { NextResponse } from "next/server";

// delete
export async function DELETE(
    req: Request,
    { params }: { params: { orderid: string }}
) {

    try {
        await connectToDB()

        const orderId = params.orderid
    
        let deleteResult = await OrderModel.findByIdAndDelete(orderId)
    
        if (deleteResult) {    
            return NextResponse.json({
                message: "order deleted"
            })
        } else {
            return NextResponse.json({ message: "order not found"})
        }
    } catch (error) {
        return new NextResponse("Server error: " + error, { status: 500})
    }
}

// patch
export async function PATCH(
    req: Request,
    { params } : { params: { orderid: string }}
) {

    try {
        await connectToDB()

        const body = await req.json()

        const { 
            seekerId, 
            agentId,
            tier,
            numApps,
            numAppsCompleted,
            status
            } = body;

        const order = await OrderModel.findById<Order>(params.orderid)

        if (!order) {
            return new NextResponse("order not found", { status: 404 })
        }

        order.seekerId = seekerId;
        order.agentId = agentId;
        order.tier = tier;
        order.numApps = numApps;
        order.numAppsCompleted = numAppsCompleted;
        order.status = status;

        await order.save()

        return NextResponse.json({
            message: "order updated"
        })
    } catch(error) {
        return new NextResponse("Server error: " + error, { status: 500})
    }
}