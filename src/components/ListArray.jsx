
import "./database";
import { database } from "./database";
import { Profile } from "./Profile";

function ListArray() {
  return (
    <div>
      <h1>List of Robots</h1>
      <div className="container">
        <div className="row ">
          {database.map((user, i) => {
            return (
              <Profile
                key={database[i].id}
                id={database[i].id}
                name={database[i].name}
                title={database[i].title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListArray;
