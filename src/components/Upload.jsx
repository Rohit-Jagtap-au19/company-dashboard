import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@material-ui/core/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import Stack from "@mui/material/Stack";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
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
                            width:'70%'
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

            {/* <Grid xs={12}>
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
                          padding: "10px 50px",
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
                          <Typography variant="h5">Upload</Typography>
                        </Stack>
                      </Button>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
