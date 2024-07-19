// next-auth.d.ts
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {

    // Adding the new field to the User interface
    interface User extends DefaultUser {
        role: "seeker" | "agent" | "admin";
    }

    // Adding the new field to the Session interface
    interface Session extends DefaultSession {
        user: {
            id: string;
            role: "seeker" | "agent" | "admin";
        } & DefaultSession["user"];
    }
}