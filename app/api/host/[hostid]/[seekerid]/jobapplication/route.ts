import { connectToDB } from "@/lib/mongodb"
import { JobApplicationModel } from "@/schemas/jobApplication"
import { JobApplication } from "@/types"
import { NextResponse } from "next/server"

export async function POST(
    request: Request,
    { params }: { params: { hostid: string, seekerid: string}}
)  {

    try {

        const formData: FormData = await request.formData()

        const data = formData.get('data') as string
        const dataJson = JSON.parse(data)
        const agentId  = params.hostid
        const seekerId = params.seekerid;
        const jobApplication = dataJson.jobApplication as JobApplication

        if (!agentId) {
            return new NextResponse('Agent not found', { status: 404 })
        }
        if (!seekerId) {
            return new NextResponse('Seeker not found', { status: 404 })
        }

        await connectToDB()

        const savedJobApplication = await JobApplicationModel.create({
            seekerid: seekerId,
            agentid: agentId,
            dateSubmitted: jobApplication.dateSubmitted,
            postingDate: jobApplication.postingDate,
            companyName: jobApplication.companyName,
            jobTitle: jobApplication.jobTitle,
            jobLocation: jobApplication.jobLocation,
            postingLink: jobApplication.postingLink,
            loginInfo: jobApplication.loginInfo,
            notes: jobApplication.notes,
            resumeUsed: jobApplication.resumeUsed,
        })

        return NextResponse.json({
            message: "Job Application created",
            jobApplication: savedJobApplication
        })


    } catch (error) {
        console.log(error)
        return new NextResponse("Failed to save job application: " + error,  { status: 500})
    }
}