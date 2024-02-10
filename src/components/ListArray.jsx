
import { Profile } from "./Profile";

function ListArray({ database }) {

  if (true) 
  return (
    <div>
      <div className="container">
        <div className="row ">
          {database.map((user, i) => {
            return (
              <Profile
                key={i}
                id={database[i].id}
                name={database[i].name}
                title={database[i].title}
                imgUrl = {database[i].imgUrl}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListArray;
