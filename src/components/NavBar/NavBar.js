import { Container } from "@mui/system";
import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#242424" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to={"/"}>
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SpaceX-Logo-Xonly.svg/1280px-SpaceX-Logo-Xonly.svg.png"
                alt=""
              />
            </Link>
            <Link to={"/"} className="mission-link">
              MISSIONS
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default NavBar;
