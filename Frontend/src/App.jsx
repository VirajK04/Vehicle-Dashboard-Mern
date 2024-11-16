import { Route, Routes, BrowserRouter } from "react-router-dom"
import Box from "@mui/material/Box"
import Home from "./pages/Home"
import Analytics from "./pages/Analytics"
import AddDiagnostic from "./pages/AddDiagnostic"
import AllDiagnostic from "./pages/AllDiagnostic"
import SearchDiagnostic from "./pages/SearchDiagnostic"
function App() {
  

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/analytics" element={<Analytics/>}></Route>
          <Route path="/adddiagnostic" element={<AddDiagnostic/>}></Route>
          <Route path="/alldiagnostic" element={<AllDiagnostic/>}></Route>
          <Route path="/searchdiagnostic" element={<SearchDiagnostic/>}></Route>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
