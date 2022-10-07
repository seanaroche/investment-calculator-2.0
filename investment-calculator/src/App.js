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

function App() {
  return (
      <div className="App">
        <Bar></Bar>
        <Investments></Investments>
      </div>
  );
}

export default App;
