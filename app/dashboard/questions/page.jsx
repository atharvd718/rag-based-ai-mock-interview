"use client";

import AddNewInterview from "@/app/dashboard/_components/AddNewInterview";
import { interviewPresets } from "@/utils/client/interviewPresets";

function QuestionsPage() {
  return (
    <div className="min-h-screen px-4 pb-12 pt-32 text-[#2C1810] md:pt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8">
          <h1 className="bg-gradient-to-r from-[#8B6F47] to-[#A0845C] bg-clip-text text-4xl font-bold text-transparent">
            Interview Modes
          </h1>
          <p className="mt-2 max-w-2xl text-[#2C1810]">
            Pick a topic card and click "Start interview on this topic". The setup form is prefilled; resume upload is optional.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {interviewPresets.map((preset) => (
            <AddNewInterview key={preset.type} preset={preset} compact />
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[#C4B49A] bg-[#8B6F47] p-6">
          <h2 className="text-xl font-bold text-[#8B6F47]">How scoring works</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["Correctness", "Completeness", "Clarity", "Tradeoffs", "Communication"].map((label) => (
              <div key={label} className="min-w-0 rounded-lg bg-[#EDE8DC] p-3 text-sm text-[#2C1810]">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsPage;
