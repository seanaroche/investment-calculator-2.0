import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Investment Data
function createData(year, amount) {
  return { year, amount };
}

//get state of value after each individual year from Investment.js
//create data with year, amount pairs



export default function Graph({arr}) {
  const theme = useTheme();

//   const data = [
//     createData(0, 300),
//     createData(1, 600),
//     createData(2,800),
//   ]


  const data = () => {
    for (let i = 0; i < arr.length; i++) {
        createData(i, arr[i]);
        console.log(createData(i, arr[i]));
    }
  };

  return (
    <React.Fragment>
      <Title>Portfolio Value</Title>
      <ResponsiveContainer width={'70%'} height={400}>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="year"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={0}
              position="middle"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Year
            </Label>
          </XAxis>
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Portfolio Value ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}