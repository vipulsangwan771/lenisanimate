"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const initialTime = 48 * 60 * 60; // 48 hours in seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate days, hours, minutes, seconds
  const getTimeParts = (seconds) => {
    const days = Math.floor(seconds / (24 * 3600));
    const hours = Math.floor((seconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const { days, hours, minutes, seconds } = getTimeParts(timeLeft);

  return (
    <>
      <div className="mb-4">
        Time Remaining
      </div>
      <div className="gap-3 grid grid-cols-4">
        {/** Box for Days */}
        <div className="bg-(--primary-card-bg) border border-(--primary-border) p-4 px-5 rounded-lg text-center">
          <p className="md:text-3xl text-lg font-bold">{days}</p>
          <p className="text-white/60 text-xs md:text-sm">Days</p>
        </div>

        {/** Box for Hours */}
        <div className="bg-(--primary-card-bg) border border-(--primary-border) p-4 px-5 rounded-lg text-center">
          <p className="md:text-3xl text-lg font-bold">{hours}</p>
          <p className="text-white/60 text-xs md:text-sm">Hrs</p>
        </div>

        {/** Box for Minutes */}
        <div className="bg-(--primary-card-bg) border border-(--primary-border) p-4 px-5 rounded-lg text-center">
          <p className="md:text-3xl text-lg font-bold">{minutes}</p>
          <p className="text-white/60 text-xs md:text-sm">Min</p>
        </div>

        {/** Box for Seconds */}
        <div className="bg-(--primary-card-bg) border border-(--primary-border) p-4 px-5 rounded-lg text-center">
          <p className="md:text-3xl text-lg font-bold">{seconds}</p>
          <p className="text-white/60 text-xs md:text-sm">Sec</p>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
