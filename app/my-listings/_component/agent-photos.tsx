'use client'

import { Button } from '@/components/ui/button'
import ImageDropZone from '@/components/imageDropZone'
import { useMyAgentStore } from '../my-agent-store'

function AgentPhotos({
    onNext,
    onPrev
}: {
    onNext?: () => void,
    onPrev: () => void
}) {

    const agent = useMyAgentStore()

    const handleFileAdd = async (filesToUpload: string[]) => {
        agent.updateState({ photos: [...agent.data.photos ?? [], ...filesToUpload]})
    }

    const handleFileDelete = (url: string) => {
        const updatedPhotos = agent.data.photos?.filter(photo => photo !== url) ?? []
        agent.updateState({ photos: updatedPhotos })
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Profile Picture</h2>
            <ImageDropZone
                onFilesAdded={handleFileAdd}
                onFileDelete={handleFileDelete}
            />
            <div className="flex justify-between items-center py-4">
                <Button type='button' variant="ghost" onClick={onPrev}>Prev</Button>
            </div>
        </div>
    )
}

export default AgentPhotos