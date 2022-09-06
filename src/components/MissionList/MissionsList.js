import { Grid } from "@mui/material";
import React from "react";
import MissionCard from "../MissionCard/MissionCard";

export default function MissionsList({ launches }) {
  console.log(launches, "mission list");

  return (
    <Grid container spacing={6} px={10}>
      {!!launches?.length ? (
        launches.map((rockets) => (
          <Grid
            container
            spacing={3}
            justifyContent="center"
            key={rockets.id}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <MissionCard
              missionName={rockets.mission_name}
              img={rockets.links.mission_patch}
              rocketName={rockets.rocket.rocket_name}
              date={rockets.launch_date_local}
              success={rockets.launch_success}
              rocketId={rockets.id}
            />
          </Grid>
        ))
      ) : (
        <div>There are no launches in the list at the moment</div>
      )}
    </Grid>
  );
}
