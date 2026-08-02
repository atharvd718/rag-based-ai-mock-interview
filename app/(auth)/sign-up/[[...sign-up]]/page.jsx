import { SignUp } from "@clerk/nextjs";
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
            <h1 className="text-4xl font-bold">Build Interview Readiness</h1>
            <p className="mt-4 text-lg text-[#8B6F47]">
              Generate targeted interviews from your resume, target role, company notes, and skill gaps.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center p-6 lg:p-10">
          <div className="w-full max-w-md text-center">
            <h2 className="mb-2 text-3xl font-bold">Create your account</h2>
            <p className="mb-8 text-[#2C1810]">Start saving sessions, reports, and practice plans.</p>
            <div className="flex justify-center">
              <SignUp
                appearance={clerkAppearance}
                routing="path"
                path="/sign-up"
                signInUrl="/sign-in"
                afterSignUpUrl="/dashboard"
              />
            </div>
            <p className="mt-6 text-sm text-[#2C1810]">
              Already have an account?{" "}
              <Link href="/sign-in" className="font-semibold text-[#8B6F47] hover:text-[#8B6F47]">
                Sign in
              </Link>
            </p>
          </div>
        </main>
      </div>
    </section>
  );
}
