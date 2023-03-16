import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "@mui/material";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

export default function Download() {
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }} className="bgcolor paddingall">
        <Sidenav />
        <Box>
        <Box height={90}/>
          <Card className="paddingall">
            <Typography variant="h5" style={{ marginBottom: 50 }}>
              Resources to help you with the task
            </Typography>
            <Grid container md={12} xs={12} direction={"row"} spacing={2}>
              <Grid item md={6} xs={12} alignItems={"center"}>
                <Card variant="outlined" className="paddingall">
                  <PictureAsPdfIcon fontSize={"large"} />
                  <Typography variant="h5">
                    Resources to help you with the task
                  </Typography>
                  <Link>
                    Click To Download file <ArrowRightAltIcon />
                  </Link>
                </Card>
              </Grid>
              <Grid item md={6} xs={12} alignItems={"center"}>
                <Card variant="outlined" className="paddingall">
                  <PictureAsPdfIcon fontSize={"large"} />
                  <Typography variant="h5">
                    Resources to help you with the task
                  </Typography>
                  <Link>
                    Click To Download file <ArrowRightAltIcon />
                  </Link>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </>
  );
}
