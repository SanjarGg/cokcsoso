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
  const limit = 12;
  const [pagesCount, setPagesCount] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchWord, setSeachWord] = React.useState("");

  const getMakaroons = () => {
    fetch(
      `${makaroonsApi}?q=${searchWord}&_limit=${limit}&_page=${currentPage}`
    )
      .then((res) => {
        let count = Math.ceil(res.headers.get("X-Total-Count") / limit);
        setPagesCount(count);
        return res.json();
      })
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
    pagesCount,
    searchWord,
    currentPage,
    setCurrentPage,
    setSeachWord,
    getMakaroons,
  };

  return (
    <ClientContext.Provider value={data}>{children}</ClientContext.Provider>
  );
}

export default ClientProvider;
