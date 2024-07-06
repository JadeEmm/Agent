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
    resumes?: string[],
    numApps: Number,
    numCredits: Number,
    allAgents: Number[],
    activeAgent: Number | null,
    preferredLocation: String,
    preferredCompanySize: String,
    preferredIndustry: String,
    preferredSalary: String
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
        resumes: [],
        numApps: 0,
        numCredits: 0,
        allAgents: [],
        activeAgent: null,
        preferredLocation: '',
        preferredCompanySize: '',
        preferredIndustry: '',
        preferredSalary: ''
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
            resumes: [],
            numApps: 0,
            numCredits: 0,
            allAgents: [],
            activeAgent: null,
            preferredLocation: '',
            preferredCompanySize: '',
            preferredIndustry: '',
            preferredSalary: ''
        }
    })
}))