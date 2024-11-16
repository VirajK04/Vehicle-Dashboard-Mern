import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import {DiagnosticList} from "./Diagnostics/DiagnosticList";

function AllDiagnostic() {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
    <Box height={30}/>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DiagnosticList />
        </Box>
      </Box>
    </>
  );
}

export default AllDiagnostic;
