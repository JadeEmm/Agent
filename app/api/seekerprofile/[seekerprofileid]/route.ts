import { storageRef } from "@/lib/firebase";
import { connectToDB } from "@/lib/mongodb";
import { SeekerProfileModel } from "@/schemas/seekerprofile";
import { SeekerProfile } from "@/types";
import { deleteObject } from "firebase/storage";
import { NextResponse } from "next/server";

// delete
export async function DELETE(
    req: Request,
    { params }: { params: { seekerprofileid: string }}
) {

    try {
        await connectToDB()

        const seekerProfileId = params.seekerprofileid
    
        let deleteResult = await SeekerProfileModel.findByIdAndDelete(seekerProfileId)
    
        if (deleteResult) {
            let seekerProfile = (deleteResult as unknown) as SeekerProfile
            /* make sure to delete the photos */
            
            if (seekerProfile.photos) {
                await Promise.all(seekerProfile.photos.map(async photo => {
                    const ref = storageRef(photo)
                    await deleteObject(ref)
                }))
            }
    
            return NextResponse.json({
                message: "seeker profile deleted"
            })
        } else {
            return NextResponse.json({ message: "seeker profile not found"})
        }
    } catch (error) {
        console.log(error)
        return new NextResponse("Server error", { status: 500})
    }

}

// POST
// TO CREATE A NEW SEEKER PROFILE OR EDIT AN EXISTING ONE
export async function POST(req: Request, { params } : { params: { seekerprofileid: string }}) {
    
    try {

        const hostid  = params.seekerprofileid // hostid is the user id of the user who is creating the seeker profile
        const body = await req.json()

        if (!hostid) {
            return new NextResponse('Host not found', { status: 404 })
        }

        await connectToDB()

        // Check if existing profile based on hostid
        const existingSeekerProfile = await SeekerProfileModel.findOne({ hostid });

        let seekerProfile;

        if (existingSeekerProfile) {
            // Update existing profile
            console.log('Updating existing seeker profile')
            seekerProfile = await SeekerProfileModel.findOneAndUpdate(
                { hostid }, 
                { ...body }, 
                { new: true }
            );
        } else {
            // Create new profile
            console.log('Creating new seeker profile')
            seekerProfile = await SeekerProfileModel.create({
                ...body, 
                hostid, 
                numApps: 0,
                numCredits: 0,
                allAgentsNumber: 0 
            });
        };


        return NextResponse.json({
            message: existingSeekerProfile ? "Profile updated!" : "Profile created!",
            newSeeker: seekerProfile
        })

    } catch(error) {
        console.log(error)
        return new NextResponse("Server error", { status: 500})
    }
}