import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { TextField, Paper, Grid } from '@mui/material';
import { Box } from '@mui/material';
import { React, useState } from 'react';
import Graph from './Graph';
import Bar from './components/Bar';
import Investments from './components/Investment';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from 'react-router-dom';

const baseTheme = createTheme({
  palette: {
    background: {
      default: "#e2e5de"
    }
  }
});

function App() {
  return (
      <div className="App">
        <MuiThemeProvider theme={baseTheme}>
          <CssBaseline />
            <Bar />
            <Routes>
              <Route path="/" element={<Investments />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
            <Box
              mt={5}
              mb={5}
              >
            </Box>
        </MuiThemeProvider>
        {/* <Login></Login> */}
      </div>
  );
}

export default App;
