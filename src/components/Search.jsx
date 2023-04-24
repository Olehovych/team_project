import React, { useState } from "react";
import { Link } from "react-router-dom";

import Login from "../pages/login/Login";
import About from "../pages/about/About";

const watches = [
  { id: 1, name: "Rolex" },
  { id: 2, name: "Omega" },
  { id: 3, name: "Cartier" },
  { id: 4, name: "Casio" },
  { id: 5, name: "Patek" },
];
const Search = () => {
  const [query, setQuery] = useState("");

  const filteredWatches = watches.filter((watch) =>
    watch.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {filteredWatches.map((watch) => (
          <Link to={About} key={watch.id}>
            {watch.name}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Search;
