'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import QuestionCard from '@/components/QuestionCard';
import FinalGate from '@/components/FinalGate';
import SurpriseMessage from '@/components/SurpriseMessage';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const questions = [
  { text: 'Are you free?', emoji: '😌' },
  { text: 'Do you smile even when you’re angry?', emoji: '😏' },
  { text: 'Is Nisarg bhaiya your fav one?', emoji: '✨' },
  { text: 'Is Tvisha your best friendi?', emoji: '✨' },
  { text: 'If I come Mumbai will you meet me?', emoji: '😏' },
  { text: 'Do you know U R everyone’s favorite?', emoji: '😎' },
];

export default function Home() {
  const [step, setStep] = useState(0);

  const backgroundImage = PlaceHolderImages.find(
    (img) => img.id === 'background-love'
  );

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
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage.imageUrl}
            alt={backgroundImage.description}
            fill
            className="object-cover -z-20"
            data-ai-hint={backgroundImage.imageHint}
          />
          <div className="absolute inset-0 bg-black/50 -z-10" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background -z-10" />
      )}
      {content}
    </main>
  );
}
