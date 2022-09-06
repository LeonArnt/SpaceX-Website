import React from "react";
import MissionsList from "../../components/MissionList/MissionsList";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "../../components/NavBar/NavBar";
import "./HomePage.css";

export default function HomePage({ data, loading }) {
  return (
    <div>
      <NavBar />
      <Container sx={{ marginTop: 10 }} maxWidth="xlg">
        <Typography
          justifyContent="center"
          variant="h2"
          component="h1"
          mb={10}
          gutterBottom
          textAlign="center"
          className="page-title"
        >
          Welcome to SpaceX Launches
        </Typography>

        <Container sx={{ width: "100%" }}>
          {!loading && <MissionsList launches={data} />}
        </Container>
      </Container>
    </div>
  );
}
