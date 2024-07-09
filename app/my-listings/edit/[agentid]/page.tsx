import { connectToDB } from "@/lib/mongodb"
import { AgentModel } from "@/schemas/agent"
import { Agent } from "@/types"
import AgentEditForm from "./_component/agent-edit-form"
import { Loader } from "@/components/loader"
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

async function AgentEditPage({
    params
}: { params: { agentid: string}}) {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    await connectToDB()

    const agent = await AgentModel.findById<Agent>(params.agentid) // the query param `agentid` is the object _id and not session.user.id/agentId

    return (
        <div>
            <h1 className="text-2xl sm:text-4xl py-8 font-bold capitalize">Edit your profile </h1>
            {
                agent ? <AgentEditForm agent={JSON.parse(JSON.stringify(agent))} /> : <Loader />
            }
        </div>
    )
}

export default AgentEditPage