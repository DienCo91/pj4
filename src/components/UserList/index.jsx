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

  return (
    <div>
      <Typography
        variant="body1"
        align="center"
        style={{ fontSize: 20, fontWeight: "600" }}
      >
        This is the user list
      </Typography>
      <List>
        {users.map((user) => (
          <>
            <ListItem
              key={user._id}
              button
              component={Link}
              to={`/users/${user._id}`}
            >
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
}

export default UserList;
