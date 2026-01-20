'use client';

import { useState, useMemo } from 'react';
import QuestionCard from '@/components/QuestionCard';
import FinalGate from '@/components/FinalGate';
import SurpriseMessage from '@/components/SurpriseMessage';

const questions = [
  { text: 'Are you the cutest person I know?', emoji: '😌' },
  { text: 'Do you smile even when you’re angry?', emoji: '😏' },
  { text: 'Do people get attracted to your vibe automatically?', emoji: '✨' },
  { text: 'Are you secretly everyone’s favorite?', emoji: '😎' },
];

export default function Home() {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const content = useMemo(() => {
    if (step < questions.length) {
      return (
        <QuestionCard
          key={step}
          question={questions[step].text}
          emoji={questions[step].emoji}
          onYesClick={handleNextStep}
        />
      );
    }
    if (step === questions.length) {
      return <FinalGate key="final-gate" onUnlock={handleNextStep} />;
    }
    return <SurpriseMessage key="surprise" />;
  }, [step]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background -z-10" />
      {content}
    </main>
  );
}
