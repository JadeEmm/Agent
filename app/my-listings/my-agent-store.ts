import { create } from 'zustand'

export type AgentType = {
    agentId?: string
    agentName?: string,
    agentDescription?: string,
    photos?: string[],
}

export interface AgentState {
    data: AgentType,
    updateState: (data: AgentType) => void,
    restart: () => void
}
export const useMyAgentStore = create<AgentState>()((set) => ({
    data: {
        agentId: ',',
        agentName: '',
        agentDescription: '',
        photos: [],
    },
    updateState: (data) => set((state) => ({
        data: { ...state.data, ...data}
    })),
    restart: () => set({
        data: {
            agentId: '',
            agentName: '',
            agentDescription: '',
            photos: [],
        }
    })
}))