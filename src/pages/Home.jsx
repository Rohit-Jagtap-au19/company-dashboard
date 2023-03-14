import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import CompanyCard from "../components/CompanyCard";

import DashboardIcons from "../components/DashboardIcons";

export default function Home() {
  return (
    <>
      <Navbar />
      <Box height={90} />
      <Box sx={{ display: "flex" }} className="bgcolor paddingall">
        <Sidenav />
        <Grid container>
          <Grid md={8} xs={12}>
            <CompanyCard />
          </Grid>
          <Grid md={4} xs={12}>
            <DashboardIcons />
          </Grid>
        </Grid>
        {/* <Upload/> */}
        {/* <Download/> */}
      </Box>
    </>
  );
}
