import React from 'react'
import './countdown.css'
import { useEffect, useState } from "react";
const countdown = () => {
  const eventDate = new Date("2026-01-24T00:00:00");

  const [time, setTime] = useState({
    days: "--",
    hours: "--",
    mins: "--",
    secs: "--"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        setTime({
          days: "00",
          hours: "00",
          mins: "00",
          secs: "00"
        });
        clearInterval(timer);
        return;
      }

      setTime({
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        mins: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
        secs: String(Math.floor((diff / 1000) % 60)).padStart(2, "0")
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
      <div className="countdown-row">
      {[
        { label: "DAYS", value: time.days },
        { label: "HOURS", value: time.hours },
        { label: "MINS", value: time.mins },
        { label: "SECS", value: time.secs }
      ].map((item, i) => (
        <div className="count-box" key={i}>
          <h1>{String(item.value).padStart(2, "0")}</h1>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default countdown
