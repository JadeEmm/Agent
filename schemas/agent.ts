import { Agent, ItemStatus } from "@/types";
import mongoose, { Schema, model, models } from "mongoose";

const AgentSchema = new Schema<Agent>({
    name: String,
    photos: [String],
    description: String,
    status: {
        type: String,
        default: ItemStatus.LISTED
    },
}, {
    timestamps: true
})


export const AgentModel = models.Agent || model('Agent', AgentSchema)