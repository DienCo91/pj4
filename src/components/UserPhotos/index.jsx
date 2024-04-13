import React from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

import models from "../../modelData/models";

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Grid,
} from "@mui/material";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId);

  // Kiểm tra xem photos có được khởi tạo không
  if (!photos || photos.length === 0) {
    return (
      <Typography variant="body1">No photos found for this user.</Typography>
    );
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Photos of User
      </Typography>
      <List>
        {photos.map((photo) => (
          <ListItem key={photo._id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt={photo.file_name}
                src={`/images/${photo.file_name}`}
              />
            </ListItemAvatar>
            <ListItemText
              primary={photo.date_time}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    Comments:
                  </Typography>
                  <Grid container spacing={1}>
                    {photo.comments && photo.comments.length > 0 ? (
                      photo.comments.map((comment) => (
                        <Grid item key={comment._id}>
                          <Typography variant="body2">
                            {comment.user.first_name} {comment.user.last_name}:{" "}
                            {comment.comment}
                          </Typography>
                        </Grid>
                      ))
                    ) : (
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                        style={{ margin: 10, opacity: 0.5 }}
                      >
                        No Comment.
                      </Typography>
                    )}
                  </Grid>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
      <Link to={`/users/${userId}`}>Back to User Detail</Link>
    </div>
  );
}
export default UserPhotos;
