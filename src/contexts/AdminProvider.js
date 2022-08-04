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
  if (action.type === "GET_BOX_MAKAROONS") {
    return {
      ...state,
      boxmakaroonos: action.payload,
    };
  }
  if (action.type === "GET_ONLY_MAKAROONS") {
    return {
      ...state,
      justmakaroons: action.payload,
    };
  }
  return state;
};

function AdminProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, {
    makaroons: [],
    boxmakaroonos: [],
    justmakaroons: [],
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

  const sendBoxMakaroons = (newBox) => {
    fetch(makaroonsApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBox),
    });
  };
  const getBoxMakaroons = () => {
    fetch(`${makaroonsApi}`)
      .then((res) => res.json())
      .then((data) => {
        let onlyBox = data.filter((item) => item.type === "box");
        let action = {
          type: "GET_BOX_MAKAROONS",
          payload: onlyBox,
        };
        dispatch(action);
      });
  };
  const getOnlyMakaroons = () => {
    fetch(`${makaroonsApi}`)
      .then((res) => res.json())
      .then((data) => {
        let onlyMakaroons = data.filter((item) => item.type === "regular");
        let action = {
          type: "GET_ONLY_MAKAROONS",
          payload: onlyMakaroons,
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
    boxmakaroonos: state.boxmakaroonos,
    justmakaroons: state.justmakaroons,
    sendMakaroons,
    getMakaroons,
    deletMakaroons,
    getMakaroonsToEdit,
    saveEditedMakaroons,
    getBoxMakaroons,
    getOnlyMakaroons,
  };

  return <AdminContext.Provider value={data}>{children}</AdminContext.Provider>;
}
export default AdminProvider;
