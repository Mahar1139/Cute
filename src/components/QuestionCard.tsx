'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type QuestionCardProps = {
  question: string;
  emoji: string;
  onYesClick: () => void;
};

export default function QuestionCard({
  question,
  emoji,
  onYesClick,
}: QuestionCardProps) {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonAbsolute, setIsNoButtonAbsolute] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const moveButton = () => {
    if (!cardRef.current || !buttonRef.current) return;
    
    if (!isNoButtonAbsolute) {
        setIsNoButtonAbsolute(true);
    }

    const cardRect = cardRef.current.getBoundingClientRect();
    const buttonRect = buttonRef.current.getBoundingClientRect();

    const maxX = cardRect.width - buttonRect.width;
    const maxY = cardRect.height - buttonRect.height;
    
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonPosition({ x: newX, y: newY });
  };
  
  return (
    <Card
      ref={cardRef}
      className="w-full max-w-md text-center animate-fade-in shadow-2xl shadow-accent/10 relative overflow-hidden bg-card/80 backdrop-blur-sm"
    >
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-headline">
          {question}{' '}
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 min-h-[160px]">
        <Button
          onClick={onYesClick}
          size="lg"
          variant="secondary"
          className="font-bold text-lg w-32 z-10 transform transition-transform hover:scale-110 active:scale-95"
        >
          YES
        </Button>
        <Button
          ref={buttonRef}
          variant="destructive"
          size="lg"
          className="font-bold text-lg w-32 transition-all duration-300 ease-in-out"
          style={
            isNoButtonAbsolute
              ? {
                  position: 'absolute',
                  top: `${noButtonPosition.y}px`,
                  left: `${noButtonPosition.x}px`,
                }
              : {}
          }
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          NO
        </Button>
      </CardContent>
    </Card>
  );
}
