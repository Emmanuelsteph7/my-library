import { createContext, useContext, useReducer } from "react";
import { v4 } from "uuid";
import Alert from "./Alert";
import "./alert.scss";

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];

      case "REMOVE_NOTIFICATION":
        return state.filter((item) => item.id !== action.id);

      default:
        return state;
    }
  }, []);

  const mappedAlerts = state.map((item) => {
    return <Alert dispatch={dispatch} key={item.id} {...item} />;
  });

  return (
    <AlertContext.Provider value={dispatch}>
      <div className="alert__wrapper">{mappedAlerts}</div>
      {children}
    </AlertContext.Provider>
  );
};

export const useSuccessAlert = () => {
  const dispatch = useContext(AlertContext);

  return ({ message }) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        type: "SUCCESS",
        message,
      },
    });
  };
};

export const useErrorAlert = () => {
  const dispatch = useContext(AlertContext);

  return ({ message }) => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        type: "ERROR",
        message,
      },
    });
  };
};

export default AlertProvider;
