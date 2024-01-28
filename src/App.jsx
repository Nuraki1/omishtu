import React, { useState } from "react";
import BlogPost from "./components/BlogPost";
import ListArray from "./components/ListArray";
import SearchBox from "./components/SearchBox";
import { database } from "./components/database";

function App() {
  const [searchfield, setSearchfield] = useState("");

  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  const filteredDatabase = database.filter((user) =>
    user.name.toLowerCase().includes(searchfield.toLowerCase())
  );

  return (
    <>
      <div className="container text-center">
        <h1>List of Robots</h1>
        <SearchBox searchChange={onSearchChange} />
        <ListArray database={filteredDatabase} />
      </div>
    </>
  );
}

export default App;
