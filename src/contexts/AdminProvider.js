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
  if (action.type === "GET_MAKAROONS_TO_EDIT") {
    return {
      ...state,
      makaroonsEdit: action.payload,
    };
  }
  return state;
};

function AdminProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    makaroons: [],
    makaroonsEdit: null,
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
  // ! delte
  const deletMakaroons = (id) => {
    fetch(`${makaroonsApi}/${id}`, {
      method: "DELETE",
    }).then(() => getMakaroons());
  };
  // ! update
  const getMakaroonsToEdit = (id) => {
    fetch(`${makaroonsApi}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        let action = {
          type: "GET_MAKAROONS_TO_EDIT",
          payload: data,
        };
        dispatch(action);
      });
  };
  const saveEditedMakaroons = (editedMakaroons) => {
    fetch(`${makaroonsApi}/${editedMakaroons.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedMakaroons),
    });
  };

  const data = {
    makaroons: state.makaroons,
    makaroonsEdit: state.makaroonsEdit,
    sendMakaroons,
    getMakaroons,
    deletMakaroons,
    getMakaroonsToEdit,
    saveEditedMakaroons,
  };

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}
export default AdminProvider;
