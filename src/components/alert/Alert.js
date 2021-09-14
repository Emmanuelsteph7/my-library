import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./alert.scss";

const Alert = ({ message, type }) => {
  const [width, setWidth] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    handleStartTimer();
  }, []);

  useEffect(() => {
    if (width === 100) {
      handleCloseTimer();
    }
  }, [width]);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 1;
        }

        clearInterval(id);
        return prev;
      });
    }, 50);

    setIntervalId(id);
  };

  const handleStopTimer = () => {
    clearInterval(intervalId);
  };

  const handleCloseTimer = () => {
    clearInterval(intervalId);
    setExit(true);
    setTimeout(() => {}, 500);
  };

  return (
    <div
      onMouseEnter={handleStopTimer}
      onMouseLeave={handleStartTimer}
      className={`alert ${type === "SUCCESS" ? "success" : "error"} ${
        exit ? "exit" : ""
      }`}
    >
      <div className="alert__icon">
        <FaTimes />
      </div>
      <p className="alert__message">{message}</p>
      <div
        className="alert__bar"
        style={{
          width: `${width}%`,
        }}
      ></div>
    </div>
  );
};

export default Alert;
