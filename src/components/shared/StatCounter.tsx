import React, { useRef, useState, useEffect } from 'react';
import { useCountUp } from '../../hooks/useCountUp';

interface StatCounterProps {
  icon: React.ReactNode;
  end: number;
  label: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({ icon, end, label }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(end, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 bg-primary text-white rounded-2xl shadow-lg transform transition-transform hover:scale-105">
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-4xl font-heading font-bold mb-1">{count}</div>
      <div className="text-sm font-ui font-medium opacity-90 uppercase tracking-wider">{label}</div>
    </div>
  );
};
