import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch,
  Button,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Header({ toggleTheme, themeMode }) {
  const [create, setcreate] = useState(true);
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          {/* Button for create and back */}
          <NavLink to={"/create"}>
            {create ? (
              <Button
                variant="contained"
                color="inherit"
                endIcon={<AddIcon />}
                onClick={() => setcreate(false)}
              >
                Create Blog
              </Button>
            ) : (
              <Button
                variant="contained"
                component={Link}
                to={"/"}
                color="inherit"
                startIcon={<ArrowBackIcon />}
                onClick={() => setcreate(true)}
              >
                Back
              </Button>
            )}
          </NavLink>
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Blog Application
        </Typography>
        {/* Switch for Dark mode */}
        <Switch
          checked={themeMode === "dark"}
          onChange={toggleTheme}
          id="mode"
        />
        {themeMode == "dark" ? <span>Light Mode</span> : <span>Dark Mode</span>}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
