import { connectToDB } from "@/lib/mongodb"
import { AgentModel } from "@/schemas/agent"
import { Agent } from "@/types"
import AgentEditForm from "./_component/agent-edit-form"
import { Loader } from "@/components/loader"


async function AgentEditPage({
    params
}: { params: { agentId: string}}) {

    await connectToDB()

    const agent = await AgentModel.findById<Agent>(params.agentId)
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