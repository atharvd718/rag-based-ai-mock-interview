"use client";

import { Button } from "@/components/ui/button";
import { getLocalInterview, isLocalInterviewId } from "@/utils/client/localInterviews";
import { useUser } from "@clerk/nextjs";
import { ArrowLeft, Briefcase, CameraOff, FileText, Lightbulb, Play, WebcamIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { toast } from "sonner";

function Interview() {
  const { interviewId } = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [webcamEnabled, setWebcamEnabled] = useState(false);
  const { user, isLoaded } = useUser();
  const webcamRef = useRef(null);

  useEffect(() => {
    async function loadInterview() {
      try {
        if (isLocalInterviewId(interviewId)) {
          setInterviewData(getLocalInterview(interviewId, user?.id));
          return;
        }

        const response = await fetch(`/api/interviews/${interviewId}`, {
          cache: "no-store",
        });
        const payload = await response.json();

        if (!response.ok) {
          throw new Error(payload.error || "Failed to load interview");
        }

        setInterviewData(payload.interview);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (interviewId && isLoaded) {
      loadInterview();
    }
  }, [interviewId, isLoaded, user?.id]);

  const disableWebcam = () => {
    const tracks = webcamRef.current?.stream?.getTracks?.() || [];
    tracks.forEach((track) => track.stop());
    setWebcamEnabled(false);
  };

  return (
    <div className="min-h-screen text-[#2C1810]">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-32 md:px-6 md:pt-10">
        <h1 className="bg-gradient-to-r from-[#8B6F47] to-[#A0845C] bg-clip-text text-4xl font-bold text-transparent">
          Interview Brief
        </h1>

        {loading ? (
          <div className="mt-8 rounded-xl border border-[#C4B49A] bg-[#EDE8DC] p-8 text-[#2C1810]">
            Loading interview...
          </div>
        ) : !interviewData ? (
          <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/10 p-8 text-[#8B6F47]">
            Interview not found or you do not have access.
          </div>
        ) : (
          <>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <section className="space-y-5">
                <div className="rounded-xl border border-[#C4B49A] bg-[#EDE8DC] p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <Briefcase className="text-[#8B6F47]" />
                    <h2 className="text-xl font-bold text-[#2C1810]">Role Setup</h2>
                  </div>
                  <InfoRow label="Job Title" value={interviewData.jobPosition} />
                  <InfoRow label="Tech Stack" value={interviewData.techStacks} />
                  <InfoRow label="Experience" value={`${interviewData.jobExperience} years`} />
                  <InfoRow label="Mode" value={interviewData.interviewType || "technical"} />
                  <InfoRow label="Difficulty" value={interviewData.difficulty || "mid"} />
                  {interviewData.targetCompany && (
                    <InfoRow label="Target Company" value={interviewData.targetCompany} />
                  )}
                </div>

                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <Lightbulb className="text-yellow-400" />
                    <h2 className="text-xl font-bold text-yellow-300">Session Notes</h2>
                  </div>
                  <p className="text-sm text-yellow-100">
                    This interview uses rubric-based AI scoring. Webcam is optional; audio transcription
                    happens in your browser and only the final text answer is stored.
                  </p>
                </div>

                {interviewData.resumeText && (
                  <div className="rounded-xl border border-[#C4B49A] bg-[#EDE8DC] p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <FileText className="text-[#8B6F47]" />
                      <h2 className="text-xl font-bold text-[#2C1810]">Resume Context</h2>
                    </div>
                    <p className="mb-3 line-clamp-4 text-sm text-[#2C1810]">{interviewData.resumeText}</p>
                  </div>
                )}
              </section>

              <section className="rounded-xl border border-[#C4B49A] bg-[#EDE8DC] p-6">
                {webcamEnabled ? (
                  <div className="space-y-6">
                    <Webcam
                      ref={webcamRef}
                      onUserMedia={() => setWebcamEnabled(true)}
                      onUserMediaError={() => setWebcamEnabled(false)}
                      mirrored
                      className="h-[300px] w-full rounded-lg object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      onClick={disableWebcam}
                      className="w-full bg-red-500/20 text-[#8B6F47] hover:bg-red-500/40"
                    >
                      <CameraOff size={16} />
                      Disable Camera
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-6">
                    <div className="rounded-xl bg-[#EDE8DC] p-12">
                      <WebcamIcon className="h-32 w-32 text-[#8B6F47]/60" strokeWidth={1} />
                    </div>
                    <Button
                      type="button"
                      onClick={() => setWebcamEnabled(true)}
                      className="bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-[#2C1810] hover:from-[#8B6F47] hover:to-[#A0845C]"
                    >
                      <WebcamIcon size={18} />
                      Enable Webcam
                    </Button>
                  </div>
                )}
              </section>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <Button
                asChild
                variant="outline"
                className="border-[#C4B49A] bg-transparent text-[#2C1810] hover:bg-[#EDE8DC] hover:text-[#2C1810]"
              >
                <Link href="/dashboard">
                  <ArrowLeft size={16} />
                  Dashboard
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-[#2C1810] hover:from-[#8B6F47] hover:to-[#A0845C]"
              >
                <Link href={`/dashboard/interview/${interviewData.mockId}/start`}>
                  <Play size={16} />
                  Start
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="mb-3">
      <p className="text-xs uppercase tracking-wide text-[#2C1810]">{label}</p>
      <p className="text-[#2C1810]">{value}</p>
    </div>
  );
}

export default Interview;
