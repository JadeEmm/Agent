import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { clientPromise } from '@/lib/mongodb'
import { MongoClient } from "mongodb";
import { Adapter } from "next-auth/adapters";
import { NextApiRequest, NextApiResponse } from "next";

export const authOptions: AuthOptions = {
    adapter: MongoDBAdapter(clientPromise() as Promise<MongoClient>) as Adapter,
    pages: {
        signIn: '/auth/sign-in',
        // newUser: 'auth/choose-role'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            profile(profile, tokens) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: "seeker"
                }
            },
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
                session.user.role = user.role;
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

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("URL HERE: ", req.url, req.query);
    console.log(req.url?.includes('/seeker') ? 'seeker' : 'agent');
    return NextAuth(req, res, {
        adapter: MongoDBAdapter(clientPromise() as Promise<MongoClient>) as Adapter,
        pages: {
            signIn: '/auth/sign-in',
            // newUser: 'auth/choose-role'
        },
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID!,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
                profile(profile, tokens) {
                    return {
                        id: profile.sub,
                        name: profile.name,
                        email: profile.email,
                        image: profile.picture,
                        role: "seeker"
                    }
                },
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
                    session.user.role = user.role;
                }
                return session
            },
            async redirect({ url, baseUrl }) {
                if (url.startsWith("/")) return `${baseUrl}${url}`
                if (new URL(url).origin === baseUrl) return url
                return baseUrl
            }
        }
    });
};

export { handler as GET, handler as POST };