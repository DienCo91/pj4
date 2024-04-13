import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import { useEffect, useState } from "react";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const user = models.userModel(userId);
  const [userPhotos, setUserPhotos] = useState([]);

  useEffect(() => {
    if (user) {
      const photos = models.photoOfUserModel(user._id);
      setUserPhotos(photos);
    }
  }, [user]);

  return (
    <>
      {user && (
        <div>
          {userPhotos.length > 0 && (
            <div>
              <Typography variant="body1">Photos:</Typography>
              {userPhotos.map((photo) => (
                <>
                  <img
                    key={photo._id}
                    src={`/images/${photo.file_name}`}
                    alt="User Photo"
                  />
                </>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
export default UserPhotos;
