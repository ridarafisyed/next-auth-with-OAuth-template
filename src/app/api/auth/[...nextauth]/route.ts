import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import { SupabaseAdapter } from "@auth/supabase-adapter"
import {Adapter} from "next-auth/adapters"

const googleId:string = process.env.GOOGLE_ID ?? ""
const googleSecret:string = process.env.GOOGLE_SECRET ?? ""

const authOptions = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider ({
            clientId: googleId,
            clientSecret:googleSecret,
        })
    ],
//     adapter: SupabaseAdapter({
//     url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
//     secret: process.env.SUPABASE_SERVICE_ROLE_KEY ?? "",
//   }) as Adapter,
})

export {authOptions as GET, authOptions as POST}