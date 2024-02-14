import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import { useState, useEffect } from "react";

export const Profile = ({ id, name,title, imgUrl }) => {
  // let numbOfLike = 0;
  const [numbOfLike, setNumbOfLike] = useState(0);

  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 ">
        <div  id="cardss" className="card m-1  p-10 bg-light-emphasis">
          <img
            src={`https://robohash.org/${id}test?`}
            
            // src= {imgUrl}
            className="card-img-top anchor"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{title}</p>
            <a
              href="#"
              onClick={() => setNumbOfLike('1')}
              className="btn btn-info"
            >
              {`${numbOfLike}Likes  `}
            </a>
            {/* <button className="btn btn-info m-33" >change title</button> */}
          </div>
        </div>
      </div>
    </>
  );
};






 // const [name, setName] = useState("");
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => {
  //       // Assuming the response is an array of users
  //       if (users && users.length > 0) {
  //         const user = users.find((user) => user.id === id);
  //         if (user) {
  //           setName(user.name); // Assuming you have a state variable 'name' to store the fetched user's name
  //         }
  //       }
  //     });
  // }, [id]);