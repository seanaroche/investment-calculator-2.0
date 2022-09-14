import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
import { React, useState } from 'react';

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
        <Box>
          <div>
            <TextField 
              name="ror" 
              label="Rate of Return" 
              variant="outlined"
              //type="number"
              value={values.ror}
              onChange={handleChange}
               />
          </div>
          <div>
            <TextField 
              name="years" 
              label="Years" 
              variant="outlined" 
              //type="number" 
              onChange={handleChange} 
              value={values.years} />
          </div>
          <div>
            <TextField 
              name="contribution" 
              label="Annual Contribution" 
              variant="outlined" 
              //type="number" 
              onChange={handleChange} 
              value={values.contribution} />
          </div>
          <div>
            <Button onClick={handleSubmit} variant="contained">Submit</Button>
          </div> 
          {/* <div>
            <TextField id="outlined-basic" label="Year 3 Contribution" variant="outlined" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Year 4 Contribution" variant="outlined" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Year 5 Contribution" variant="outlined" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Year 6 Contribution" variant="outlined" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Year 7 Contribution" variant="outlined" />
          </div>
          <div>
            <TextField id="outlined-basic" label="Year 8 Contribution" variant="outlined" />
          </div> */}
        </Box>
      </div>
  );
}

export default App;
