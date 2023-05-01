import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Search.scss";
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
      <div className="search">
        <input
          placeholder="Search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default Search;
