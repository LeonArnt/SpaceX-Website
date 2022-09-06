import { Stack } from "@mui/system";
import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CardMedia,
  FormControl,
  Grid,
  OutlinedInput,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Rocket.css";
import CommentCard from "../CommentCard/CommentCard";

export default function Rocket({ data }) {
  const { id } = useParams();
  const userData = {
    from: "",
    comment: "",
    id: id,
  };

  const formHasError = useRef(false);
  const [formError, setFromError] = useState({});
  const [user, setUser] = useState(userData);
  const navigate = useNavigate();

  const validate = (user) => {
    const errorMsg = {};
    formHasError.current = true;
    if (!user.from) {
      errorMsg.from = "Please enter a name";
      formHasError.current = false;
    }
    if (!user.comment) {
      errorMsg.comment = "Please enter a comment";
      formHasError.current = false;
    }
    return errorMsg;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handlePost = () => {
    const errors = validate(user);
    if (user.from === "" || user.comment === "") {
      return setFromError(errors);
    }
    fetch("http://localhost:8000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then(() => {
      console.log(user);
      navigate("/");
    });
  };

  return (
    <div>
      <Stack direction="row" justifyContent="center" alignItems="stretch">
        <Grid container spacing={1}>
          <Grid sx={{ marginRight: 8 }} xs={8}>
            <Box
              sx={{
                padding: 2,
                margin: "auto",
                backgroundColor: "#242424de",
                color: "white",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
              }}
            >
              <Box display="flex" justifyContent="center" textAlign="center">
                {data.links.mission_patch ? (
                  <CardMedia
                    component="img"
                    height="500"
                    width="200"
                    image={data.links.mission_patch}
                    alt="text"
                    className="image-container"
                  />
                ) : (
                  <CardMedia
                    component="img"
                    height="300"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    alt="text"
                    className="image-container"
                  />
                )}
              </Box>
              <Typography sx={{ marginTop: 4 }} variant="h2">
                {data.mission_name}
              </Typography>
              <Typography sx={{ marginTop: 5, marginBottom: 3 }} variant="h4">
                {data.rocket.rocket_name}
              </Typography>
              {!!data?.details?.length ? (
                <Typography sx={{ fontSize: 20 }}>{data.details}</Typography>
              ) : (
                <Typography sx={{ fontSize: 25 }}>
                  THERE IS NO DESCRIPTION FOR THIS MISSION FOR THIS ROCKET
                </Typography>
              )}
            </Box>
            <Box
              sx={{
                backgroundColor: "#242424de",
                color: "white",
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
              }}
            >
              <Grid sx={{ padding: 3 }}>
                <Grid>
                  <Box pt={2}>
                    <Typography variant="h6">Height:</Typography>
                    <Typography variant="h6" color="primary">
                      {data.rocket.rocket.height.meters} meters
                    </Typography>
                  </Box>
                </Grid>
                <Grid>
                  <Box pt={2}>
                    <Typography variant="h6">Weight:</Typography>
                    <Typography variant="h6" color="primary">
                      {data.rocket.rocket.mass.kg} kilograms
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box pt={2}>
                    <Typography variant="h6">Country:</Typography>
                    <Typography variant="h6" color="primary">
                      {data.rocket.rocket.country}
                    </Typography>
                  </Box>
                </Grid>
                <Typography variant="h5" sx={{ marginTop: 2 }}>
                  Launch Date:{" "}
                  {new Date(data.launch_date_local).toLocaleDateString()}
                  <Button
                    sx={{ float: "right", marginRight: 2 }}
                    size="small"
                    variant="contained"
                    color="primary"
                  >
                    <Link
                      to={"/"}
                      style={{
                        textDecoration: "none",
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Back to Homepage
                    </Link>
                  </Button>
                </Typography>
              </Grid>
            </Box>
          </Grid>
          <Grid s={4}>
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Comment Something:
            </Typography>
            <FormControl sx={{ width: "25ch", display: "block" }}>
              {formError.from && (
                <p className="empty-inputs">Please enter a name first</p>
              )}
              <OutlinedInput
                onChange={(e) => handleInputChange(e)}
                size="small"
                name="from"
                placeholder="From:"
              />
            </FormControl>
            <FormControl>
              {formError.comment && (
                <p className="empty-inputs">
                  Please enter type a comment first
                </p>
              )}
              <OutlinedInput
                onChange={(e) => handleInputChange(e)}
                name="comment"
                size="small"
                style={{ width: 300, marginTop: 8 }}
                placeholder="Your Comment:"
              />
              <button className="post-btn" onClick={handlePost}>
                Post
              </button>
            </FormControl>

            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Community Comments:
            </Typography>
            <CommentCard />
          </Grid>
        </Grid>
      </Stack>
    </div>
  );
}
