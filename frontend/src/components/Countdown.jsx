import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Countdown.css";

// Midnight at the start of December 13, 2026, in Haiti.
// This is not a confirmed election start time.
const TARGET_TIME = Date.parse("2026-12-13T00:00:00-05:00");

function getTimeRemaining() {
  const total = Math.max(0, TARGET_TIME - Date.now());

  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1_000) % 60),
  };
}

export default function Countdown() {
  const { t } = useTranslation();
  const [time, setTime] = useState(getTimeRemaining);

  useEffect(() => {
    const update = () => setTime(getTimeRemaining());
    const timer = window.setInterval(update, 1000);

    document.addEventListener("visibilitychange", update);

    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const units = [
    { key: "days", label: t("countdownDays"), value: time.days },
    { key: "hours", label: t("countdownHours"), value: time.hours },
    { key: "minutes", label: t("countdownMinutes"), value: time.minutes },
    { key: "seconds", label: t("countdownSeconds"), value: time.seconds },
  ];

  return (
    <div className="countdown">
      <p className="countdown-heading">{t("electionDayLabel")}</p>

      <div className="countdown-grid" role="timer" aria-live="off">
        {units.map(({ key, label, value }) => (
          <div className="countdown-box" key={key}>
            <span className="countdown-number">
              {String(value).padStart(2, "0")}
            </span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
