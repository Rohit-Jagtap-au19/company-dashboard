
import React from 'react'
import Box from '@mui/material/Box';

import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import ResponsiveDrawer from '../components/ResSide';
import CompanyCard from '../components/CompanyCard';
import Upload from '../components/Upload';
import Download from '../components/Download';
export default function Home() {
  return (
    
    <>
    <Navbar/>
    <Box height={90}/>
    <Box sx={{ display: 'flex' }} className='bgcolor paddingall'>
    <Sidenav/>
      {/* <Upload/> */}
      <CompanyCard/>
      {/* <Download/> */}
    <Box>
      </Box>
    </Box>
    </>
  );
}
