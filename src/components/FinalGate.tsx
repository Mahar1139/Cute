'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type FinalGateProps = {
  onUnlock: () => void;
};

const CLICKS_REQUIRED = 5;

export default function FinalGate({ onUnlock }: FinalGateProps) {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= CLICKS_REQUIRED) {
      setTimeout(onUnlock, 300);
    }
  };

  return (
    <Card className="w-full max-w-md text-center animate-fade-in shadow-2xl shadow-accent/10 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-headline">
          To unlock your surprise, click YES 5 times ❤️
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center gap-4 pt-4 min-h-[100px]">
        <Button
          onClick={handleClick}
          size="lg"
          variant="secondary"
          className="font-bold text-lg w-48 transform transition-transform hover:scale-110 active:scale-95"
          aria-label={`Click yes. ${
            CLICKS_REQUIRED - clickCount
          } clicks remaining.`}
        >
          {clickCount > 0 ? `YES (${clickCount})` : 'YES'}
        </Button>
      </CardContent>
    </Card>
  );
}
