import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function MissionCard({
  missionName,
  rocketName,
  date,
  img,
  rocketId,
  success,
}) {
  const launchSuccess = (success) => {
    if (success) {
      const successful = "Launch Successful";
      return successful;
    } else {
      const failed = "Launch Failed";
      return failed;
    }
  };

  return (
    <Link style={{ textDecoration: "none" }} to={`/rocket/${rocketId}`}>
      <Card
        variant="outlined"
        className="mdc-card__primary-action mdc-card__ripple"
        sx={{
          maxWidth: 350,
          height: 500,
          textAlign: "center",
          background: "#242424de",
          color: "white",
          textDecorationLine: "none",
          padding: 3,
          borderRadius: 10,
        }}
      >
        {img ? (
          <CardMedia
            component="img"
            height="275"
            width="350"
            image={img}
            alt="text"
          />
        ) : (
          <CardMedia
            component="img"
            height="300"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            alt="text"
          />
        )}

        <CardContent>
          <Typography
            sx={{ marginBottom: 2 }}
            gutterBottom
            variant="h5"
            component="div"
          >
            <strong>{missionName}</strong>
          </Typography>
          <CardActions sx={{ justifyContent: "center", marginBottom: 1 }}>
            <Button variant="contained" color="primary" size="medium">
              Rocket:{rocketName}
            </Button>
          </CardActions>
          <Typography variant="body1">
            Launch Date: {new Date(date).toLocaleDateString()}
          </Typography>
          <Typography variant="body1">{launchSuccess(success)}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default MissionCard;
