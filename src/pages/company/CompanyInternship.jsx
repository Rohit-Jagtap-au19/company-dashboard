import React from 'react'
import Box from '@mui/material/Box';
import Navbar from '../../components/Navbar';
import Sidenav from '../../components/Sidenav';
import Internship_Stats from '../../components/Internship_Stats';
import Data_export from '../../components/Data_export';
import Data_table from '../../components/Data_table';

export default function CompanyInternship() {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
    <Box sx={{ display: 'flex' }} className="bgcolor">
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    <Internship_Stats/>
    <Data_table/>
    <Box height={40}/>
    <Data_export/>
      </Box>
    </Box>
    </>
  )
}
