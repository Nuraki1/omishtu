import React from "react";
// import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";
import { useState } from "react";

export const Profile = ({ id, name, title }) => {


  // let numbOfLike = 0;

  const [numbOfLike, setNumbOfLike] = useState(0);

  // const like = () => {
  //  setNumbOfLike(like + 1)
  // };

  return (
    <>
      <div id="cardss" className="col-sm-6 col-md-4 col-lg-3 ">
        <div className="card m-1 p-1 bg-light-emphasis">
          <img
            src={`https://robohash.org/${id}test?`}
            className="card-img-top card-anchor"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{title}</p>
            <a href="#" onClick={()=> setNumbOfLike (numbOfLike + 1)} className="btn btn-info">
              {numbOfLike} like
            </a>
            {/* <button className="btn btn-info m-33" >change title</button> */}
          </div>
        </div>
      </div>
    </>
  );
};
