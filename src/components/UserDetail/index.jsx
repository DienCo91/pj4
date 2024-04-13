import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

import models from "../../modelData/models";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  return (
    <>
      {user && (
        <div>
          <Typography variant="body1">ID: {user._id}</Typography>
          <Typography variant="body1">First Name: {user.first_name}</Typography>
          <Typography variant="body1">Last Name: {user.last_name}</Typography>
          <Typography variant="body1">Location: {user.location}</Typography>
          <Typography variant="body1">
            Description: {user.description}
          </Typography>
          <Typography variant="body1">Occupation: {user.occupation}</Typography>
          <Typography variant="body1">
            <Link to={`/photos/${user._id}`}>
              <button>See Photos</button>
            </Link>
          </Typography>
        </div>
      )}
    </>
  );
}

export default UserDetail;
