import './App.css';
import Button from '@mui/material/Button';
import { Box, TextField, Stack, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import React from 'react';
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
    var total = 0;
    var annualContribution = parseInt(values.contribution);
    var numOfYears = parseInt(values.years);
    var rate = parseFloat(values.ror);
    const data = [{
      year: 0,
      contribution: 0,
      balance: 0,
    }];
    for (let i = 1; i <= numOfYears; i++) {
      total += annualContribution;
      total += total * rate;
      data.push({
        year: i,
        contribution: annualContribution,
        balance: total,
      });
    }
    setData(data);
  }

  return(
    <React.Fragment>
      <Grid 
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        >
        <Grid 
          item xs={8}
          >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 375,
            }}>
            <Graph investData={data}/>
          </Paper>
        </Grid> 
        <Grid item xs={3}>
          <Paper 
            elevation={3}
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 375,
            }}>
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
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <Paper
            elevation={6}
            >
            <PortfolioValue investData={data}/>
          </Paper>
          
        </Grid>
      </Grid>
    </React.Fragment>
  )
}