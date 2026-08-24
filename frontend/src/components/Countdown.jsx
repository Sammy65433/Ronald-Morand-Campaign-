import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Countdown() {
  const { t } = useTranslation();
  const targetDate = new Date("2026-12-13T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div className="countdown-box">
        <span>{timeLeft.days}</span>
        <p>{t("countdownDays")}</p>
      </div>

      <div className="countdown-box">
        <span>{timeLeft.hours}</span>
        <p>{t("countdownHours")}</p>
      </div>

      <div className="countdown-box">
        <span>{timeLeft.minutes}</span>
        <p>{t("countdownMinutes")}</p>
      </div>

      <div className="countdown-box">
        <span>{timeLeft.seconds}</span>
        <p>{t("countdownSeconds")}</p>
      </div>
    </div>
  );
}

export default Countdown;
