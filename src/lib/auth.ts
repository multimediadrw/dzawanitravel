import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Hanya izinkan email dzawani.marketing@gmail.com
      if (user.email !== process.env.ADMIN_EMAIL) {
        return false
      }

      // Simpan atau update user di database
      try {
        await prisma.adminUser.upsert({
          where: { email: user.email },
          update: {
            name: user.name,
            image: user.image,
          },
          create: {
            email: user.email!,
            name: user.name,
            image: user.image,
          },
        })
      } catch (error) {
        console.error("Error saving admin user:", error)
      }

      return true
    },
    async session({ session, token }) {
      return session
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
})
