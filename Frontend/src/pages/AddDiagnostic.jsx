import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import DiagnosticFields from "./DiagnosticFields/DiagnosticFields";

function AddDiagnostic() {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DiagnosticFields/>
        </Box>
      </Box>
    </>
  );
}

export default AddDiagnostic;
