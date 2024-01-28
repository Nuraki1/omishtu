import React from "react";

function SearchBox({ searchChange }) {
  return (
    <>
      {/* <input
       type="search" 
       placeholder="Search for robots"
       onChange={searchChange} /> */}

      <div class="main">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search for companies"
            onChange={searchChange}
          />
        </div>

        <p class="mt-4 text-center">
          <a href="#">Come and visit our site</a>
        </p>
      </div>
    </>
  );
}

export default SearchBox;
