import React from "react";

function SearchBox({ searchChange }) {
  return (
    <>
    
      <div className="main">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search for companies" onChange={searchChange}
          />
        </div>

        <p className="mt-4 text-center">
          <a href="#">Search the company name that you want</a>
        </p>
      </div>
    </>
  );
}

export default SearchBox;
