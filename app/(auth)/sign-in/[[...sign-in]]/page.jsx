import { SignIn } from "@clerk/nextjs";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import { clerkAppearance } from "@/utils/clerkAppearance";

export default function Page() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#A0845C] p-4 text-[#2C1810]">
      <div className="grid w-full max-w-6xl overflow-hidden rounded-2xl border border-[#C4B49A] bg-[#EDE8DC] shadow-2xl backdrop-blur-xl lg:grid-cols-2">
        <section className="hidden items-center justify-center bg-gradient-to-br from-[#8B6F47] to-cyan-700 p-10 lg:flex">
          <div className="max-w-md">
            <BrainCircuit className="mb-6 text-[#2C1810]" size={48} />
            <h1 className="text-4xl font-bold">AI Mock Interview</h1>
            <p className="mt-4 text-lg text-[#8B6F47]">
              Practice with role-specific questions, rubric scoring, grounded feedback, and personalized
              coaching.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center p-6 lg:p-10">
          <div className="w-full max-w-md text-center">
            <h2 className="mb-2 text-3xl font-bold">Welcome back</h2>
            <p className="mb-8 text-[#2C1810]">Sign in to continue your interview practice.</p>
            <div className="flex justify-center">
              <SignIn
                appearance={clerkAppearance}
                routing="path"
                path="/sign-in"
                signUpUrl="/sign-up"
                afterSignInUrl="/dashboard"
              />
            </div>
            <p className="mt-6 text-sm text-[#2C1810]">
              New here?{" "}
              <Link href="/sign-up" className="font-semibold text-[#8B6F47] hover:text-[#8B6F47]">
                Create an account
              </Link>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}
