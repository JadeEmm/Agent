import { Order, Tier, Status } from "@/types";
import mongoose, { Schema, model, models } from "mongoose";

const OrderSchema = new Schema<Order>({
    seekerId: { type: mongoose.Types.ObjectId, ref: 'seekerprofiles', default: null },
    agentId: { type: mongoose.Types.ObjectId, ref: 'agents', default: null },
    tier: {
        type: String,
        enum: Object.values(Tier),
        required: true
    },
    numApps: Number,
    numAppsCompleted: Number,
    status: {
        type: String,
        enum: Object.values(Status),
        required: true
    },
}, {
    timestamps: true
})


export const OrderModel = models.Order || model('Order', OrderSchema)