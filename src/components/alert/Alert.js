import { useCallback, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./alert.scss";

const Alert = ({ message, type, dispatch, id }) => {
  const [width, setWidth] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    handleStartTimer();
  }, []);

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

  const handleCloseTimer = useCallback(() => {
    clearInterval(intervalId);
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: "REMOVE_NOTIFICATION",
        id,
      });
    }, 500);
  }, [dispatch, id, intervalId]);

  useEffect(() => {
    if (width === 100) {
      handleCloseTimer();
      setTimeout(() => {
        dispatch({
          type: "REMOVE_NOTIFICATION",
          id,
        });
      }, 500);
    }
  }, [width, handleCloseTimer, dispatch, id]);

  return (
    <div
      onMouseEnter={handleStopTimer}
      onMouseLeave={handleStartTimer}
      className={`alert ${type === "SUCCESS" ? "success" : "error"} ${
        exit ? "exit" : ""
      }`}
    >
      <div className="alert__icon" onClick={handleCloseTimer}>
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
