import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import NewCalendar from "../components/NewCalendar";

export default function Calendar_01() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Navbar />
      <Box height={90} />
      <Box sx={{ display: "flex" }} className="bgcolor paddingall">
        <Sidenav />
        <Box>
          <Grid container >
            <Grid md={12} xs={12}>
              <Calendar onChange={onChange} value={value} />
            </Grid>
            <Grid md={12} xs={12} style={{marginTop:'100px'}}>
              <NewCalendar />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
