import React from "react";
import { makaroonsApi } from "../helpers/Const";

export const AdminContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === "GET_MAKAROONS") {
    return {
      ...state,
      makaroons: action.payload,
    };
  }
  return state;
};

function AdminProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    makaroons: [],
  });

  const sendMakaroons = (newMakaroons) => {
    fetch(makaroonsApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMakaroons),
    });
  };
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
    sendMakaroons,
    getMakaroons,
  };
  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
