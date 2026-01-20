'use client';

import FloatingHearts from './FloatingHearts';

export default function SurpriseMessage() {
  const messageLines = [
    '💖 Surprise! 💖',
    'You are not just cute,',
    'you are rare Nammu.',
    'Your smile can change moods,',
    'your presence feels calm,',
    'and honestly…',
    'anyone who knows you like me',
    'is lucky to have you. 🌸',
    'Never change who you are ✨',
    'I always wait for your msg',
    '💖 Lve you Namudii 💖',
  ];

  return (
    <div className="relative flex flex-col items-center justify-center text-center p-6">
      <FloatingHearts />
      <div className="bg-card/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl shadow-accent/20">
        {messageLines.map((line, index) => (
          <p
            key={index}
            className="text-xl sm:text-2xl md:text-3xl font-headline text-card-foreground my-2 animate-fade-in"
            style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
