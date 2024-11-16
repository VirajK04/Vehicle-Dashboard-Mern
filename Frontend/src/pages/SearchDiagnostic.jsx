import React from "react";
import Sidenav from "../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import SearchForm from "./Search/SearchForm";

function SearchDiagnostic() {
  return (
    <>
    <Navbar/>
    <Box height={70}/>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <SearchForm/>
        </Box>
      </Box>
    </>
  );
}

export default SearchDiagnostic;
