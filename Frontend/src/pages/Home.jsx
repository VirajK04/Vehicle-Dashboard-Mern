import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
    <Navbar/>
    <Box height={30}/>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Home</h1>
          <p>This is a Diagnostic Dashboard.</p>
          <p>Here you can add, search, delete and view diagnostics.</p>
          <p>Analytics Section will be added soon.</p>
          <p>So get started with using Dashboard now.</p>
        </Box>
      </Box>
    </>
  );
}

export default Home;
