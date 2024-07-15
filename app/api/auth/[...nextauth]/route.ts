import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { clientPromise } from '@/lib/mongodb'
import { MongoClient } from "mongodb";
import { Adapter } from "next-auth/adapters";

declare module 'next-auth' {
    interface Session {
        user: {
            id: string,
            name: string
        }
    }
}

export const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(clientPromise() as Promise<MongoClient>) as Adapter,
    pages: {
        signIn: '/auth/sign-in',
        newUser: 'auth/choose-role'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID!,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
        // })
    ],
    callbacks: {
        async session({ session, token, user }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`
            if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}