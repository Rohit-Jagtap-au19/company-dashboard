import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

export default function Upload() {
  const [file, setFile] = useState(null);
  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <>
      <Navbar />
      <Box sx={{ display: "flex" }} height={90} className="bgcolor paddingall">
        <Sidenav />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Box height={90} />
              <Grid item md={12} xs={12} className="paddingall">
                <Typography variant="h5" style={{ marginBottom: 50 }}>
                  Submit Your Work
                </Typography>
                <Grid item md={12} xs={12} direction={"row"} spacing={3}>
                  <Grid item md={12} xs={12} alignItems={"center"}>
                    <Card
                      variant="outlined"
                      className="paddingall"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "200px",
                      }}
                    >
                      <Card
                        style={{
                          borderRadius: "50%",
                          backgroundColor: "whitesmoke",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          cursor: "pointer",
                        }}
                      >
                        <DescriptionIcon fontSize={"large"} />
                        <Typography
                          variant="h5"
                          style={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "70%",
                          }}
                        >
                          <input type="file" onChange={handleFileUpload} />
                        </Typography>
                      </Card>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid xs={12}>
              <Grid item md={12} xs={12} className="paddingall">
                <Typography variant="h5" style={{ marginBottom: 50 }}>
                  Submit Your Work
                </Typography>
                <Grid container md={12} xs={12} direction={"row"} spacing={3}>
                  <Grid item md={12} xs={12} alignItems={"center"}>
                    <Card
                      variant="outlined"
                      className="paddingall"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        height: "200px",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          borderRadius: "50%",
                          padding: "20px 20px",
                          backgroundColor: "skyblue",
                          height: "100%",
                        }}
                      >
                        <Stack spacing={1} direction={"column"}>
                          <DescriptionIcon
                            fontSize={"large"}
                            style={{
                              display: "block",
                              fontSize: "50px",
                              width: "100%",
                            }}
                          />
                          <Typography variant="h5" style={{marginLeft:'10px'}}>
                            <input type="file" onChange={handleFileUpload} />
                          </Typography>
                        </Stack>
                      </Button>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
