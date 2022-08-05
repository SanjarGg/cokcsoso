import React, { useContext } from "react";
import axios from "axios";
import ClientProvider from "./ClientProvider";

function Search() {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [searchTitle, setsearchTitle] = React.useState("");

  const { makaroons, getMakaroons } = useContext(ClientProvider);
  React.useEffect(() => {
    getMakaroons();
  }, []);

  return (
    <div className="app">
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Найдем Вкусняшку"
        onChange={(e) => setsearchTitle(e.target.value)}
      />
      {loading ? (
        <h4>loading...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}
    </div>
  );
}

export default Search;
