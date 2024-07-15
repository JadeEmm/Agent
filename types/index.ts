import { Document } from 'mongoose'

export interface JobApplication extends Document {
    jobid: string,
    seekerid?: string,
    agentid?: string,
    dateSubmitted: Date,
    postingDate?: Date,
    companyName: string,
    jobTitle: string,
    jobLocation: string,
    postingLink: string,
    loginInfo: string,
    notes: string,
    resumeUsed: string,
}

export interface Agent extends Document {
    agentId: string // the session.user.id of the agent creating their profile
    name: string,
    photos: string[],
    description: string,
    status: string,
    orders: string[],
}

export interface SeekerProfile extends Document {
    name: string,
    hostid?: string,
    photos: string[],
    description: string,
    workHistory: string,
    fullName: string,
    address: string,
    phoneNumber: string,
    emailAddress: string,
    education: string,
    relevantLinks: string,
    workAuthorization: boolean,
    requiresSponsorship: boolean,
    disability: boolean,
    veteran: boolean,
    ethnicity: string,
    gender: string,
    resumeLink: string,
    resumes: string[],
    numApps: Number,
    numCredits: Number,
    allAgents: [Number],
    activeAgent: Number,
    preferredLocation: String,
    preferredCompanySize: String,
    preferredIndustry: String,
    preferredSalary: String,
    orders: string[]
}

export enum Tier {
    One = "one",
    Two = "two"
}

export enum Status {
    Pending = "pending",
    InProgress = "in-progress",
    Complete = "complete"
}

export interface Order extends Document {
    seekerId?: string,
    agentId?: string,
    tier: Tier,
    numApps: Number,
    numAppsCompleted: Number,
    status: Status,
}

export interface Booking extends Document {
    itemid?: string,
    guestid?: string,
    rentstart: Date,
    rentend: Date,
    duration: number        // number of days or hours
    durationtype: string    // hourly or daily
    amount: number
    comment: string,
    rating: number          // out of 5
    stripeid?: string,
    status: BookingStatus
    /*
        pending // item to pickup in future
        rented  // currently guest has item
        returned // when an item is returned
        
    */
}

export enum BookingStatus {
    PENDING = 'PENDING',
    RENTED = 'RENTED',
    RETURNED = 'RETURNED',
    CANCELLED = 'CANCELLED'
}

export type Price = {
    daily: number,
    hourly: number
}

export type User = {
    id: string,
    name: string,
    image: string,
    emailVerified: Date,
    phone: string,
    email: string,
}

export enum ItemStatus {
    LISTED = 'Profile Live',
    UNLISTED = 'Profile Hidden'
}