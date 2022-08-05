import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const UserDetails = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((response) => {
      setUserInfo(response.data.results[0]);
    });
  }, []);

  return (
    userInfo && (
      <div>
        <p>
          Name:
          {userInfo.name.title +
            " " +
            userInfo.name.first +
            " " +
            userInfo.name.last}
        </p>
        <p>Email: {userInfo.email}</p>
        <p>Gender: {userInfo.gender}</p>
        <p>Phone: {userInfo.phone}</p>
      </div>
    )
  );
};

export default UserDetails;
