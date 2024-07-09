import { JobApplication } from "@/types";
import mongoose, { Schema, model, models } from "mongoose";

const JobApplicationSchema = new Schema<JobApplication>({
    jobid: String,
    seekerid: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
    agentid: { type: mongoose.Types.ObjectId, ref: 'User', default: null },
    dateSubmitted: { type: Date, default: Date.now },
    postingDate: Date,
    companyName: String,
    jobTitle: String,
    jobLocation: String,
    postingLink: String,
    loginInfo: String,
    notes: String,
    resumeUsed: String,
}, {
    timestamps: true
})

export const JobApplicationModel = models.JobApplication || model('JobApplication', JobApplicationSchema)