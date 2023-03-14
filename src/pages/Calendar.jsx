import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import 'react-calendar/dist/Calendar.css';
import CompanyCard from "../components/CompanyCard";
import Calendar from 'react-calendar'
export default function Calendar_01() {
    const [value, onChange] = useState(new Date());
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }} className="bgcolor paddingall">
        <Sidenav />
        <Box>
        <Calendar onChange={onChange} value={value} />
        </Box>
      </Box>
    </>
  );
}
