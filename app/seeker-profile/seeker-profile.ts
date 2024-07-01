import { create } from 'zustand'

export type SeekerProfileType = {
    name?: string,
    description?: string,
    photos?: string[],
    workHistory?: string,
    fullName?: string,
    address?: string,
    phoneNumber?: string,
    emailAddress?: string,
    education?: string,
    relevantLinks?: string,
    workAuthorization?: boolean,
    requiresSponsorship?: boolean,
    disability?: boolean,
    veteran?: boolean,
    ethnicity?: string,
    gender?: string,
    resumeLink?: string,
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
        fullName: '',
        address: '',
        phoneNumber: '',
        emailAddress: '',
        education: '',
        relevantLinks: '',
        workAuthorization: true,
        requiresSponsorship: false,
        disability: false,
        veteran: false,
        ethnicity: '',
        gender: '',
        resumeLink: '',
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
            fullName: '',
            address: '',
            phoneNumber: '',
            emailAddress: '',
            education: '',
            relevantLinks: '',
            workAuthorization: true,
            requiresSponsorship: false,
            disability: false,
            veteran: false,
            ethnicity: '',
            gender: '',
            resumeLink: '',
        }
    })
}))