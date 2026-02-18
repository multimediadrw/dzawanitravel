"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

export default function AdminLoginPage() {
  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/admin/dashboard" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-magenta-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Dzawani Travel"
            width={200}
            height={60}
            className="h-12 w-auto"
          />
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600">
            Login dengan akun Google yang terdaftar
          </p>
        </div>

        {/* Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white border-2 border-gray-300 rounded-xl py-4 px-6 flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-purple-500 transition-all duration-300 group"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          <span className="text-gray-700 font-semibold group-hover:text-purple-600">
            Login dengan Google
          </span>
        </button>

        {/* Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Hanya akun <strong>dzawani.marketing@gmail.com</strong> yang dapat mengakses admin panel
          </p>
        </div>

        {/* Security Note */}
        <div className="mt-6 bg-purple-50 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <h3 className="text-sm font-semibold text-purple-900 mb-1">
                Keamanan Terjamin
              </h3>
              <p className="text-xs text-purple-700">
                Sistem login menggunakan OAuth 2.0 dari Google untuk keamanan maksimal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
