import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { Box, TextField, Stack, Grid, Paper } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar'
import { useState } from 'react';
import React from 'react';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Graph from './Graph';
import PortfolioValue from './PortolioValue';

const initialValues = {
    ror: "",
    years: "",
    contribution: "",
  };

  

export default function Investments() {
  const [values, setValues] = useState(initialValues);

  const [data, setData] = useState([]);

  //const [show, setShow] = useState(false);

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
    var total = 0;
    var annualContribution = parseInt(values.contribution);
    var numOfYears = parseInt(values.years);
    var rate = parseFloat(values.ror);
    const data = [{
      year: 0,
      contribution: 0,
      balance: 0,
    }];
    console.log("parsed contribution: " + annualContribution);
    console.log("parsed years: " + numOfYears);
    console.log("parsed ror: " + rate);
    for (let i = 1; i <= numOfYears; i++) {
      total += annualContribution;
      console.log("total after adding contribution in year" + i + ": " + total);
      total += total * rate;
      console.log("total after rate of return in year" + i + ": " + total);
      console.log("Total after year " + i + " " + total);
      data.push({
        year: i,
        contribution: annualContribution,
        balance: total,
      });
    }
    setData(data);
    console.log(total);
  }

  return(
    <React.Fragment>
      <Grid 
        container
        spacing={1}
        // direction="column"
        // alignItems="center"
        // //justifyContent="center"
        >
        <Grid item xs={8}>
          <Paper>
            <Graph investData={data}/>
          </Paper>
        </Grid> 
        <Grid item xs={3}>
          <Stack spacing={2}>
            <Title>Investment Information</Title>
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
        </Grid>
        <Grid item xs={9}>
          <PortfolioValue> investData={data}</PortfolioValue>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}