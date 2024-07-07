import { create } from 'zustand'

export type AgentType = {
    name?: string,
    description?: string,
    photos?: string[],
}

export interface AgentState {
    data: AgentType,
    updateState: (data: AgentType) => void,
    restart: () => void
}
export const useMyAgentStore = create<AgentState>()((set) => ({
    data: {
        name: '',
        description: '',
        photos: [],
    },
    updateState: (data) => set((state) => ({
        data: { ...state.data, ...data}
    })),
    restart: () => set({
        data: {
            name: '',
            description: '',
            photos: [],
        }
    })
}))