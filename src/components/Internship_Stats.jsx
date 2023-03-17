import React from "react";
import { Typography, Box, Grid, Paper, Card, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function Internship_Stats() {
  return (
    <>
      <Box className="paddingall mb">
        <Grid container spacing={1} className="mb">
          <Grid xs={6} md={3}>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">Internship Hosted</Typography>
              <Typography variant="h4">5</Typography>
            </Paper>
          </Grid>
          <Grid xs={6} md={3} s>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">Total Applicants</Typography>
              <Typography variant="h4">20</Typography>
            </Paper>
          </Grid>
          <Grid xs={6} md={3}>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">Immersion Hosted</Typography>
              <Typography variant="h4">5</Typography>
            </Paper>
          </Grid>
          <Grid xs={6} md={3}>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">Job Offer Made</Typography>
              <Typography variant="h4">5</Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid xs={6}>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">A+ Grade Submission- 10</Typography>
            </Paper>
          </Grid>
          <Grid xs={6}>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">A Grade Submission - 30</Typography>
            </Paper>
          </Grid>
          <Grid xs={6}>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">B,C Grade Submission - 160</Typography>
            </Paper>
          </Grid>
          <Grid xs={6}>
            <Paper style={{ textAlign: "center" }}>
              <Typography variant="h6">Pending Immersions - 20 </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
