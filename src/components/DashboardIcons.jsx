import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import trophy from "../assets/trophy.png";
import certificate from "../assets/certificate.png";
import i from "../assets/letter-i.png";
import restart from "../assets/restart.png";
import Grid from "@mui/material/Grid";

export default function DashboardIcons() {
  return (
    <Grid container direction={"column"} spacing={4}>
      <Grid item style={{marginTop:'30px',display:'flex',justifyContent:'space-evenly'}}>
          <img
            src={trophy}
            alt="loading"
            style={{ height: "100px", width: "100px" }}
          />
          <img
            src={certificate}
            alt="loading"
            style={{ height: "100px", width: "100px" }}
          />
       
      </Grid>
      <Grid item style={{display:'flex',justifyContent:'space-evenly'}}>
          <img
            src={i}
            alt="loading"
            style={{ height: "100px", width: "100px" }}
          />
          <img
            src={restart}
            alt="loading"
            style={{ height: "100px", width: "100px" }}
          />
      </Grid>
    </Grid>
  );
}
