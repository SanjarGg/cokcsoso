import React from "react";
import { makaroonsApi } from "../helpers/Const";

export const ClientContext = React.ClientContext();
const reducer = (state, action) => {
  if (action.payload === "GET_MAKAROONS") {
    return {
      ...state,
      makaroons: action.payload,
    };
  }
  return state;
};

function ClientProvider({ children }) {
  const [state, dispatch] = React.useRedecer(reducer, {
    makaroons: [],
  });

  const getMakaroons = () => {
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
    makaroons,
    getMakaroons,
  };

  return (
    <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
  );
}

export default ClientProvider;
