import { Agent, ItemStatus } from "@/types";
import mongoose, { Schema, model, models } from "mongoose";

const AgentSchema = new Schema<Agent>({
    agentId: String,
    name: String,
    photos: [String],
    description: String,
    status: {
        type: String,
        default: ItemStatus.LISTED
    },
    orders: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'orders',
            default: null,
        },
    ],
}, {
    timestamps: true,
})


export const AgentModel = models.Agent || model('Agent', AgentSchema)