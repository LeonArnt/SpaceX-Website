import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Rocket from "../../components/Rocket/Rocket";

function RocketDetailsPage({ details, loading }) {
  const { id } = useParams();
  console.log(details, "details");
  const filteredData = details.filter((rocket) => rocket.id === id);

  return (
    <div>
      <NavBar />
      <Container sx={{ marginTop: 10 }}>
        {!loading && <Rocket data={filteredData[0]} />}
      </Container>
    </div>
  );
}

export default RocketDetailsPage;
