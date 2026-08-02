"use client";

import { CheckCircle2, Lightbulb, ListChecks, Volume2 } from "lucide-react";
import React, { useState } from "react";

function QuestionsSection({ mockInterviewQues, activeQuestionIndex, onQuestionChange }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const activeQuestion = mockInterviewQues?.[activeQuestionIndex];
  const questionCount = mockInterviewQues?.length || 0;
  const progress = questionCount ? Math.round(((activeQuestionIndex + 1) / questionCount) * 100) : 0;

  const textToSpeech = (text) => {
    if (!text) return;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const msg = new SpeechSynthesisUtterance(text);
      msg.onstart = () => setIsSpeaking(true);
      msg.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(msg);
      return;
    }

    alert("Your browser does not support text-to-speech");
  };

  if (!mockInterviewQues?.length) {
    return (
      <div className="rounded-xl border border-[#C4B49A] bg-[#EDE8DC] p-6 text-[#2C1810]">
        No questions found for this interview.
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-xl border border-[#C4B49A] bg-[#EDE8DC] p-5 backdrop-blur-xl md:p-6">
      <div className="flex flex-col gap-3 border-b border-[#C4B49A] pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-[#2C1810]">Active prompt</p>
          <h2 className="mt-1 text-lg font-bold text-[#2C1810]">
            Question {activeQuestionIndex + 1} of {questionCount}
          </h2>
        </div>
        <div className="min-w-36">
          <div className="mb-2 flex items-center justify-between text-xs text-[#2C1810]">
            <span>Round progress</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-[#EDE8DC]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#8B6F47] to-[#A0845C] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {mockInterviewQues.map((question, index) => (
          <button
            type="button"
            key={question.id || index}
            onClick={() => onQuestionChange?.(index)}
            className={`flex items-center justify-center gap-2 rounded-lg p-2 text-center text-sm transition-all ${
              activeQuestionIndex === index
                ? "bg-gradient-to-r from-[#8B6F47] to-[#A0845C] text-[#2C1810]"
                : "bg-[#EDE8DC] text-[#2C1810] hover:bg-[#EDE8DC]"
            }`}
          >
            {index < activeQuestionIndex && <CheckCircle2 size={14} />}
            Q{index + 1}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wide text-[#2C1810]">
              {activeQuestion?.category || "interview"} · {activeQuestion?.difficulty || "adaptive"}
            </p>
            <h2 className="text-xl font-bold leading-relaxed text-[#2C1810]">
              Q. {activeQuestion?.ques}
            </h2>
          </div>
          <button
            type="button"
            className="rounded-full bg-[#EDE8DC] p-2 transition-all hover:bg-[#EDE8DC]"
            onClick={() => textToSpeech(activeQuestion?.ques)}
          >
            <Volume2 className={isSpeaking ? "animate-pulse text-[#8B6F47]" : "text-[#8B6F47]"} />
          </button>
        </div>

        {activeQuestion?.rubric?.length > 0 && (
          <div className="rounded-lg border border-[#C4B49A] bg-[#EDE8DC] p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#2C1810]">
              <ListChecks size={16} className="text-[#8B6F47]" />
              What this tests
            </div>
            <div className="space-y-2">
              {activeQuestion.rubric.map((item, index) => (
                <div
                  key={`${item.criterion}-${index}`}
                  className="flex justify-between gap-4 text-sm text-[#2C1810]"
                >
                  <span>{item.criterion}</span>
                  <span className="text-[#8B6F47]">{item.weight}%</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5">
        <div className="mb-3 flex items-center gap-3">
          <Lightbulb className="text-yellow-400" />
          <h2 className="text-lg font-bold text-yellow-300">Interview Tip</h2>
        </div>
        <p className="text-sm text-yellow-100">
          Use a structured answer: situation, decision, tradeoffs, result. Add one concrete project example
          when possible.
        </p>
      </div>
    </div>
  );
}

export default QuestionsSection;
