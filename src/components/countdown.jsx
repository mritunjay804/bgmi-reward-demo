import { useEffect, useState } from "react";
import "../styels/countdown.css";

export function Countdown() {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prev;
        }

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            hours--;
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const expired =
    time.hours === 0 &&
    time.minutes === 0 &&
    time.seconds === 0;

  return (
    <section className="countdown-section">

      <div className="countdown-left">
        <i className="bi bi-chevron-right"></i>

        <span>
          Rewards will be available until
        </span>
      </div>

      {expired ? (
        <div className="event-expired">
          Event Expired
        </div>
      ) : (
        <div className="countdown-right">
          <i className="bi bi-stopwatch"></i>

          <span>
            {String(time.hours).padStart(2, "0")}
          </span>

          <b>:</b>

          <span>
            {String(time.minutes).padStart(2, "0")}
          </span>

          <b>:</b>

          <span>
            {String(time.seconds).padStart(2, "0")}
          </span>
        </div>
      )}

    </section>
  );
}