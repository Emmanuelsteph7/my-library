import { createContext } from "react";
import Alert from "./Alert";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const notification = [
    {
      id: 1,
      type: "SUCCESS",
      message: "Hello Worldjbhvhvvhhhhhhhhhhhhhhhhhhhhhhhh",
    },
    {
      id: 2,
      type: "ERROR",
      message: "Hello World",
    },
  ];

  const mappedAlerts = notification.map((item) => {
    return <Alert key={item.id} {...item} />;
  });
  return (
    <>
      <div className="alert__wrapper" style={alertStyles}>
        {mappedAlerts}
      </div>
      {children}
    </>
  );
};

const alertStyles = {
  position: "fixed",
  top: "10px",
  right: "10px",
  minWidth: "250px",
};

export default AlertProvider;
