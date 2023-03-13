import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import Quizinstruction from "../components/quiz/Quizinstruction";
import Card from "@mui/material/Card";
import "../../src/dash.css";
import Quizbuttons from "../components/quiz/Quizbuttons";
import Quizquestion from "../components/quiz/Quizquestion";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <>
      <Navbar />
      <Box height={90} />
      <Box sx={{ display: "flex" }} className="bgcolor paddingall">
        <Sidenav />
        <Box width={"100%"}>
            <Typography textAlign={"center"} variant="h2">
              Quiz Assasment
            </Typography>
            <Typography textAlign={"center"} variant="h4">
              Multiple choice questions with time limit
            </Typography>

          <Quizinstruction />
          <Quizbuttons />
          <Quizquestion />
          <Link to='/videointerview'>

          <Button
            variant="contained"
            style={{
              borderRadius: "10px",
              padding: "10px",
              float: "right",
              marginTop:'10px'
            }}
          >
            Move to Video inerview
            <SendIcon
              style={{
                marginLeft: "10px",
              }}
            />
          </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
