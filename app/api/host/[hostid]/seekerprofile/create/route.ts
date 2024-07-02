import { connectToDB } from "@/lib/mongodb"
import { SeekerProfileModel } from "@/schemas/seekerprofile"
import { SeekerProfile } from "@/types"
import { NextResponse } from "next/server"
import { describe } from "node:test"


export async function POST(
    request: Request,
    { params }: { params: { hostid: string}}
)  {

    try {

        const formData: FormData = await request.formData()

        const data = formData.get('data') as string
        const dataJson = JSON.parse(data)
        const hostid  = params.hostid
        const seekerProfile = dataJson.seekerProfile as SeekerProfile

        if (!hostid) {
            return new NextResponse('Host not found', { status: 404 })
        }

        await connectToDB()

        const savedSeekerProfile = await SeekerProfileModel.create({
            name: seekerProfile.name,
            hostid: hostid,
            photos: seekerProfile.photos ?? [],
            description: seekerProfile.description,
            workHistory: seekerProfile.workHistory,
            fullName: seekerProfile.fullName,
            address: seekerProfile.address,
            phoneNumber: seekerProfile.phoneNumber,
            emailAddress: seekerProfile.emailAddress,
            education: seekerProfile.education,
            relevantLinks: seekerProfile.relevantLinks,
            workAuthorization: seekerProfile.workAuthorization,
            requiresSponsorship: seekerProfile.requiresSponsorship,
            disability: seekerProfile.disability,
            veteran: seekerProfile.veteran,
            ethnicity: seekerProfile.ethnicity,
            gender: seekerProfile.gender,
            resumeLink: seekerProfile.resumeLink,
            resumes: seekerProfile.resumes ?? []
        })

        return NextResponse.json({
            message: "Profile created",
            seekerprofile: savedSeekerProfile
        })


    } catch (error) {
        console.log(error)
        return new NextResponse("Failed to save seeker profile: " + error,  { status: 500})
    }
}