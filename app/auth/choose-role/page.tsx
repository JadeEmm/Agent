// 'use client'

// import MaxWContainer from "@/components/max-w-container"
// import { Button } from "@/components/ui/button"
// import { signIn } from "next-auth/react"
// import Image from "next/image"

// export default function ChooseRole() {
     
//     return (
//         <MaxWContainer classes="border rounded shadow-md py-24 mt-8">
//             <h1 className="text-2xl font-bold text-center">Choose Your Role</h1>

//             <hr />

//             <div className="flex flex-col items-center w-full space-y-2 py-8">

//                 <Button 
//                 // onClick={async () => await signIn('google', {
//                 //     callbackUrl: `${window.location.origin}`
//                 // })}
//                 className="shadow-sm" 
//                 variant='outline'>
//                     Seeker
//                 </Button>
//                 <Button 
//                 // onClick={async () => await signIn('google', {
//                 //     callbackUrl: `${window.location.origin}`
//                 // })}
//                 className="shadow-sm" 
//                 variant='outline'>
//                     Agent
//                 </Button>
//             </div>

//         </MaxWContainer>
//     )
// }

'use client'

import { useState } from "react"
import { useRouter } from "next/router"
import MaxWContainer from "@/components/max-w-container"
import { Button } from "@/components/ui/button"

export default function ChooseRole() {
    const [role, setRole] = useState(null)
    // const router = useRouter()

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole)
    }

    const handleConfirmation = () => {
        if (role === 'seeker') {
            <h3>Redirect to Seeker dashboard</h3> 
            // router.push('/seeker-dashboard')
        } else if (role === 'agent') {
            <h3>Redirect to Agent dashboard</h3> 
            // router.push('/agent-dashboard')
        }
    }

    return (
        <MaxWContainer classes="border rounded shadow-md py-24 mt-8">
            <h1 className="text-2xl font-bold text-center">Choose Your Role</h1>
            <hr />
            <div className="flex justify-around py-8">
                <Button 
                    onClick={() => handleRoleSelection('seeker')}
                    className={`shadow-sm ${role === 'seeker' ? 'bg-blue-500 text-white' : 'outline'}`} 
                    variant='outline'>
                    Seeker
                </Button>
                <Button 
                    onClick={() => handleRoleSelection('agent')}
                    className={`shadow-sm ${role === 'agent' ? 'bg-blue-500 text-white' : 'outline'}`} 
                    variant='outline'>
                    Agent
                </Button>
            </div>
            {role && (
                <div className="text-center mt-8">
                    <p className="text-lg">
                        {role === 'seeker' ? 
                            "Seekers are ready to find jobs. You'll be able to access your seeker dashboard to enter your preferences and find the right agent for you. Click the button below if you're ready to find your dream job." : 
                            "Agents help others find jobs. You'll be able to access your agent dashboard to update your profile and be visible to seekers. Click the button below if you're ready to help others get jobs."
                        }
                    </p>
                    <Button 
                        onClick={handleConfirmation}
                        className="mt-4 shadow-sm bg-green-500 text-white">
                        {role === 'seeker' ? "I'm ready to find a job" : "I'm ready to help others"}
                    </Button>
                </div>
            )}
        </MaxWContainer>
    )
}
