import React from "react";
import { makaroonsApi } from "../helpers/Const";

export const ClientContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_MAKAROONS") {
    return {
      ...state,
      makaroons: action.payload,
    };
  }
  return state;
};

function ClientProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    makaroons: [],
  });
  // ! READ
  const getMakaroons = (makaroons) => {
    fetch(makaroonsApi)
      .then((res) => res.json())
      .then((data) => {
        let action = {
          type: "GET_MAKAROONS",
          payload: data,
        };
        dispatch(action);
      });
  };

  const data = {
    makaroons: state.makaroons,
    getMakaroons,
  };

  return (
    <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
  );
}

export default ClientProvider;
