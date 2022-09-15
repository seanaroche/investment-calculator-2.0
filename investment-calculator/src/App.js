import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { Box, TextField } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar'
import { React, useState } from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Investments from './Investment';
import Bar from './Bar';
import Graph from './Graph'


const initialValues = {
  ror: "",
  years: "",
  contribution: ""
};

function App() {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
        ...values,
        [name]: value,
    });
  };

  const handleSubmit = (event) => {
    console.log(values.years);
    console.log(values.ror);
    console.log(values.contribution);
    let total = 0;
    for (let i = 1; i <= values.years; i++) {
      total += values.contribution;
      console.log("total after adding contribution in year" + i + ": " + total);
      total += total * (values.ror);
      console.log("total after rate of return in year" + i + ": " + total);
      //console.log("Total after year " + i + " " + total);
    }
    console.log(total);
  }

  return (
      <div className="App">
        <Bar />
        <Graph />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Investments />

        </Box>
      </div>
  );
}

export default App;
