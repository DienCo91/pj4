import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import models from "../../modelData/models";

import { Link } from "react-router-dom";

function UserList() {
  const users = models.userListModel();

  const createListItems = () => {
    return users.map((user, index) => (
      <ListItem key={index}>
        <Link to={`/users/${user._id}`}>
          <ListItemText
            primary={user.first_name + " " + user.last_name}
            secondary={user.location}
          />
        </Link>
        <Divider />
      </ListItem>
    ));
  };

  return (
    <div>
      <Typography variant="body1">This is the user list</Typography>
      <List component="nav">{createListItems()}</List>
    </div>
  );
}

export default UserList;
