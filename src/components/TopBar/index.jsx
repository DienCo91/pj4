import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

import "./styles.css";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar({ title }) {
  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="toolbar">
        <Typography variant="h5" color="inherit">
          Dang Tien Dung
        </Typography>
        <Typography>{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
