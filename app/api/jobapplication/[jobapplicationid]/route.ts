import { connectToDB } from "@/lib/mongodb";
import { JobApplicationModel } from "@/schemas/jobApplication";
import { JobApplication } from "@/types";
import { NextResponse } from "next/server";

// delete
export async function DELETE(
    req: Request,
    { params }: { params: { jobapplicationid: string }}
) {

    try {
        await connectToDB()

        const jobApplicationId = params.jobapplicationid
    
        let deleteResult = await JobApplicationModel.findByIdAndDelete(jobApplicationId)
    
        if (deleteResult) {    
            return NextResponse.json({
                message: "job application deleted"
            })
        } else {
            return NextResponse.json({ message: "job application not found"})
        }
    } catch (error) {
        console.log(error)
        return new NextResponse("Server error: " + error, { status: 500})
    }
}

// patch
export async function PATCH(
    req: Request,
    { params } : { params: { jobapplicationid: string }}
) {

    try {
        await connectToDB()

        const body = await req.json()

        const { 
            seekerid, 
            agentid,
            dateSubmitted,
            postingDate,
            companyName,
            jobTitle,
            jobLocation,
            postingLink,
            loginInfo,
            notes,
            resumeUsed
            } = body;

        const jobApplication = await JobApplicationModel.findById<JobApplication>(params.jobapplicationid)

        if (!jobApplication) {
            return new NextResponse("job application not found", { status: 404 })
        }

        jobApplication.seekerid = seekerid;
        jobApplication.agentid = agentid;
        jobApplication.dateSubmitted = dateSubmitted;
        jobApplication.postingDate = postingDate;
        jobApplication.companyName = companyName;
        jobApplication.jobTitle = jobTitle;
        jobApplication.jobLocation = jobLocation;
        jobApplication.postingLink = postingLink;
        jobApplication.loginInfo = loginInfo;
        jobApplication.notes = notes;
        jobApplication.resumeUsed = resumeUsed;

        await jobApplication.save()

        return NextResponse.json({
            message: "job application updated"
        })
    } catch(error) {
        console.log(error)
        return new NextResponse("Server error: " + error, { status: 500})
    }

}