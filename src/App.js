import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import { useMissions } from "./utils/useMissions";
import HomePage from "./containers/HomePage/HomePage";
import RocketDetailsPage from "./containers/RocketDetails/RocketDetailsPage";
import { Link } from "react-router-dom";

function App() {
  const { data, loading } = useMissions();

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage data={data?.launchesPast} loading={loading} />}
      />
      <Route
        path="/rocket/:id"
        element={
          <RocketDetailsPage details={data?.launchesPast} loading={loading} />
        }
      />
      <Route
        path="*"
        element={
          <>
            <div>ERROR 404</div>
            <div>
              Back to <Link to={"/"}>Home Page</Link>
            </div>
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
