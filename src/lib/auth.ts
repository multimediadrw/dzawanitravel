import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      // Hanya izinkan email dzawani.marketing@gmail.com
      const adminEmail = process.env.ADMIN_EMAIL || "dzawani.marketing@gmail.com"
      if (user.email !== adminEmail) {
        return false
      }
      return true
    },
    async session({ session }) {
      return session
    },
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  secret: process.env.AUTH_SECRET,
}
