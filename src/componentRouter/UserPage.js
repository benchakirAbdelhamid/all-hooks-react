import React, { useEffect, useState } from "react";
import { getUser } from "./Api/Users";
import { useParams } from "react-router";

export default function UserPage() {
  const { id, name } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    getUser(id)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        console.log("===>", id, name);
        // console.log(data.phone);
      })
      .catch((error) => {
        alert("error api");
      });
  }, []);

  return (
    <div>
      {/* <span>
        {id} of user and {name}
      </span> */}
      {data.length === 0 ? (
        <h1>Wait Please...</h1>
      ) : (
        <div>
          <h1>
            {data.username} Details with id {data.id}
          </h1>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      )}
    </div>
  );
}
