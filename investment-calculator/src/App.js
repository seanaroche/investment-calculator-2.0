import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { TextField, Paper, Grid } from '@mui/material';
import { Box } from '@mui/material';
import { React, useState } from 'react';
import Graph from './Graph';
import Bar from './Bar';
import Investments from './Investment';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

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
            <Bar></Bar>
            <Box
              mt={5}
              mb={5}
              >
              <Investments></Investments>
            </Box>
        </MuiThemeProvider>
      </div>
  );
}

export default App;
