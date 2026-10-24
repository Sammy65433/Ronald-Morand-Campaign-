import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

/* Verify this date with the campaign before publishing. */
const ELECTION_DATE = "2026-12-13T00:00:00";

function getTimeLeft() {
  const distance = new Date(ELECTION_DATE).getTime() - Date.now();

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

function Countdown() {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: t("countdownDays") },
    { value: timeLeft.hours, label: t("countdownHours") },
    { value: timeLeft.minutes, label: t("countdownMinutes") },
    { value: timeLeft.seconds, label: t("countdownSeconds") },
  ];

  return (
    <div className="countdown" role="timer" aria-live="off">
      {units.map(({ value, label }) => (
        <div className="countdown-box" key={label}>
          <span>{String(value).padStart(2, "0")}</span>
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export default Countdown;
