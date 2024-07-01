import { create } from 'zustand'

export type SeekerProfileType = {
    name?: string,
    description?: string,
    photos?: string[],
    workHistory?: string,
}

export interface SeekerProfileState {
    data: SeekerProfileType,
    updateState: (data: SeekerProfileType) => void,
    restart: () => void
}

export const useSeekerProfile = create<SeekerProfileState>()((set) => ({
    data: {
        name: '',
        description: '',
        photos: [],
        workHistory: '',
    },
    updateState: (data) => set((state) => ({
        data: { ...state.data, ...data}
    })),
    restart: () => set({
        data: {
            name: '',
            description: '',
            photos: [],
            workHistory: '',
        }
    })
}))