import { useEffect, useState } from "react";

export const Countdown = () => {
  const targetDate = new Date("2025-11-30T09:00:00Z");

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const total = targetDate.getTime() - Date.now();

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / (1000 * 60)) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  function pad(value: number) {
    return String(value).padStart(2, "0");
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <div className="flex gap-4 text-5xl font-bold text-white bg-orange-300 px-6 py-4 rounded-xl shadow-md">
        <div className="flex flex-col items-center">
          <span>{pad(timeLeft.days)}</span>
          <span className="text-sm font-medium text-gray-400 mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{pad(timeLeft.hours)}</span>
          <span className="text-sm font-medium text-gray-400 mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{pad(timeLeft.minutes)}</span>
          <span className="text-sm font-medium text-gray-400 mt-1">
            Minutes
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span>{pad(timeLeft.seconds)}</span>
          <span className="text-sm font-medium text-gray-400 mt-1">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};
