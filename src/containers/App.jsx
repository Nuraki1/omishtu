import React, { useEffect, useState } from "react";
import "../App.css";
import ListArray from "../components/ListArray";
import SearchBox from "../components/SearchBox";
import { database } from "../components/database";
import Scrollable from "../components/Scrollable";
import ErrorBoundary from "../components/ErrorBoundary";


function App() {
  const [searchfield, setSearchfield] = useState("");
  const filteredDatabase = database.filter((user) =>
    user.name.toLowerCase().includes(searchfield.toLowerCase())
  );



  function onSearchChange(event) {
    setSearchfield(event.target.value);
  }

  return (
    <>
      <div className="container text-center">
        <h1 className="poppins-regular">Technology companies in Ethiopia</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>

      <Scrollable>
        <ErrorBoundary>
          <ListArray database={filteredDatabase} />
        </ErrorBoundary>
      </Scrollable>
    </>
  );
}

export default App;
