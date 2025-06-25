import Signin from "@/components/Auth/Signin";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden min-h-[600px] lg:min-h-[700px]">
        
        <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            
            <div className="text-center mb-8 lg:mb-12">
              <Link href="/" className="inline-block mb-6 lg:mb-8">
                <Image
                  className="hidden dark:block mx-auto"
                  src="/images/logo/Boodev_logo.png"
                  alt="Boodev Logo"
                  width={176}
                  height={32}
                  priority
                />
                <Image
                  className="dark:hidden mx-auto"
                  src="/images/logo/logo-dark.svg"
                  alt="Boodev Logo"
                  width={176}
                  height={32}
                  priority
                />
              </Link>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
                Welcome Back!
              </h1>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium leading-relaxed">
                Sign in to your account by completing the fields below
              </p>
            </div>

            <Signin />

          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-600 p-8 sm:p-10 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden">
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-white"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 rounded-full border border-white"></div>
          </div>
          
          <div className="relative z-10 max-w-lg mx-auto text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
              Your Gateway to Productivity
            </h2>
            <p className="text-sm sm:text-base lg:text-lg mb-8 lg:mb-12 leading-relaxed text-white/90">
              Manage your projects, collaborate with your team, and track progress easily with NextAdmin — the ultimate dashboard toolkit.
            </p>
            
            <div className="mb-8 lg:mb-12 flex justify-center lg:justify-start">
              <Image
                src="/images/grids/grid-02.svg"
                alt="Dashboard Illustration"
                width={300}
                height={240}
                className="w-64 h-auto sm:w-80 lg:w-96 opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-safe-area-inset-bottom lg:hidden"></div>
    </div>
  );
}