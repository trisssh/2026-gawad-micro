import { useState, useEffect, useCallback } from "react";

function getTimeLeft(targetDate) {
  const diff = +new Date(targetDate) - +new Date();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  const update = useCallback(() => {
    setTimeLeft(getTimeLeft(targetDate));
  }, [targetDate]);

  useEffect(() => {
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [update]);

  if (timeLeft.expired) {
    return (
      <div className="text-center text-3xl font-semibold text-red-500">
        Time's up!
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 justify-center items-center">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center text-gray-900 bg-white rounded-xl px-4 py-3 min-w-[70px] md:min-w-[100px] shadow-lg"
        >
          <span className="text-3xl font-bold tabular-nums">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-wide text-gray-400">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
    