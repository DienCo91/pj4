import "./App.css";
import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopBar from "./components/TopBar";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList/index";
import UserPhotos from "./components/UserPhotos";

const App = () => {
  const [title, setTitle] = React.useState("Home Page");

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <Router>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TopBar title={title} />
          </Grid>
          <div className="main-topbar-buffer" />
          <Grid item sm={3}>
            <Paper className="main-grid-item">
              <UserList />
            </Paper>
          </Grid>
          <Grid item sm={9}>
            <Paper className="main-grid-item">
              <Routes>
                <Route
                  path="/"
                  element={
                    <Typography variant="body1">
                      Please select an user from left side.
                    </Typography>
                  }
                />
                <Route
                  path="/users/:userId"
                  element={<UserDetail titleOnChange={changeTitle} />}
                />
                <Route
                  path="/photos/:userId"
                  element={<UserPhotos titleOnChange={changeTitle} />}
                />
                <Route path="/users" element={<UserList />} />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default App;
