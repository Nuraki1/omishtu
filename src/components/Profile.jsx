import React from "react";
// import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./profile.css";


export const Profile = ({id, name, title}) => {
  return (
    <>
    
        <div className="col-sm-6 col-md-4 col-lg-3 ">
          <div className="card m-1 p-1 bg-light-emphasis">
            <img
              src={`https://robohash.org/${id}test?`}
              className="card-img-top card-anchor"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{title}</p>
              <a href="#" className="btn btn-info">
                like
              </a>
            </div>
          </div>
        </div>
        
    
    </>
  );
};
