import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { Box, TextField, Stack } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar'
import { useState } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Graph from './Graph';

const initialValues = {
    ror: "",
    years: "",
    contribution: "",
  };

  

export default function Investments() {
  const [total, setTotal] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [yoyTotals, setYoyTotals] = useState([])

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
    let years = parseInt(values.years);
    let rate = parseFloat(values.ror);
    let contribution = parseInt(values.contribution)
    let total = 0;
    let runningTotals = [];
    runningTotals[0] = contribution;
    for (let i = 1; i <= years; i++) {
      total += contribution;
      console.log("total after adding contribution in year" + i + ": " + total);
      total += total * (rate);
      console.log("total after rate of return in year" + i + ": " + total);
      runningTotals[i] = parseInt(total);
      console.log("The current runningTotal[i] at" + i + "is: " + runningTotals[i])
      //console.log("Total after year " + i + " " + total);
    }
    console.log(total);
    setTotal(total);
    setYoyTotals(runningTotals);
  }

  return(
    <React.Fragment>
        <Title>Investment Information</Title>
        <Stack
            component="form"
            sx={{
            width: '25ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >
            <TextField 
              name="ror" 
              label="Rate of Return" 
              variant="outlined"
              //type="number"
              value={values.ror}
              onChange={handleChange}
               />
            <TextField 
              name="years" 
              label="Years" 
              variant="outlined" 
              //type="number" 
              onChange={handleChange} 
              value={values.years} />
            <TextField 
              name="contribution" 
              label="Annual Contribution" 
              variant="outlined" 
              //type="number" 
              onChange={handleChange} 
              value={values.contribution} />
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </Stack> 
        <Box>
            <Title>Total: </Title>
            <Typography>{parseInt(total)}</Typography>
            <Typography>{yoyTotals.map((value) => <li>{value}</li>)}</Typography>
        </Box>    
    </React.Fragment>
  )
}