import { SeekerProfile } from "@/types";
import mongoose, { Schema, model, models } from "mongoose";

const SeekerProfileSchema = new Schema<SeekerProfile>({
    name: String,
    hostid: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        default: null
    },
    photos: [String],
    description: String,
    workHistory: String,
    fullName: String,
    address: String,
    phoneNumber: String,
    emailAddress: String,
    education: String,
    relevantLinks: String,
    workAuthorization: Boolean,
    requiresSponsorship: Boolean,
    disability: Boolean,
    veteran: Boolean,
    ethnicity: String,
    gender: String,
}, {
    timestamps: true
})


export const SeekerProfileModel = models.SeekerProfile || model('SeekerProfile', SeekerProfileSchema)