import React, { useEffect, useState } from "react";

import ListArray from "./components/ListArray";
import SearchBox from "./components/SearchBox";
import { database } from "./components/database";

function App() {
  
  // useEffect(()=> console.log('rendered...'), [])
  
  
  
  
  
  // const filteredDatabase = database.filter((user) =>
  //   user.name.toLowerCase().includes(searchfield.toLowerCase())
  // );
  
  
  
  // const searchfield = obj;
  
  const [searchfield, setSearchfield] = useState("");
  
  const filteredDatabase = database.filter((user)=>
  user.name.toLowerCase().includes(searchfield.toLowerCase())
  )
  
  function onSearchChange(event) {
      setSearchfield(event.target.value);
    }

  return (
    <>
      <div className="container text-center">
        <h1>List of Robots</h1>
        <SearchBox searchChange= {onSearchChange}/>
        <ListArray  database={filteredDatabase}/>


        {/* <SearchBox searchChange={onSearchChange} /> */}
      </div>
    </>
  );
}

export default App;
