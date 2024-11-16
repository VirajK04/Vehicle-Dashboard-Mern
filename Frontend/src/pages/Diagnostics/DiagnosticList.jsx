import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

// const columns = [
//   { id: 'id', label: 'ID', minWidth: 170 },
//   { id: 'name', label: 'Name', minWidth: 100 },
//   {
//     id: 'speed',
//     label: 'Speed',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'fuel',
//     label: 'Fuel Level',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'temperature',
//     label: 'Engine Temperature',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

export const DiagnosticList = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  
  useEffect(() => {
    const getDiagnostics = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/v1/diagnostic");
          const data = response.data.result;
            setRows(data);
        } catch (err) {
            console.log(err);
        }
    };

    getDiagnostics();
}, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell
                  align='left'
                  style={{ minWidth: "120px" }}
                >
                  ID
                  
                </TableCell>
                <TableCell
                  align='left'
                  style={{ minWidth: "120px" }}
                >
                  Name
                  
                </TableCell>
                <TableCell
                  align='left'
                  style={{ minWidth: "120px" }}
                >
                  Speed
                  
                </TableCell>
                <TableCell
                  align='left'
                  style={{ minWidth: "120px" }}
                >
                  Fuel Level
                  
                </TableCell>
                <TableCell
                  align='left'
                  style={{ minWidth: "120px" }}
                >
                  Engine Temperature
                  
                </TableCell>
                <TableCell
                  align='left'
                  style={{ minWidth: "120px" }}
                >
                  Alert
                  
                </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                   
                        <TableCell key={row._id} align="left">
                          {row._id}
                        </TableCell>
                        <TableCell key={row._id} align="left">
                          {row.name}
                        </TableCell>
                        <TableCell key={row._id} align="left">
                          {row.speed}
                        </TableCell>
                        <TableCell key={row._id} align="left">
                          {row.fuelLevel}
                        </TableCell>
                        <TableCell key={row._id} align="left">
                          {row.engineTemperature}
                        </TableCell>
                        <TableCell key={row._id} align="left">
                          {row.alert.map((alert) => <p key={alert}>{alert}</p>)}
                        </TableCell>
              
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
