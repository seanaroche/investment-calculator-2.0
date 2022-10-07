import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



//used to create test data - This worked, table populated etc. Does not work with mapping prop investData. 


            // function createData(year, contribution, balance) {
            //     return { year, contribution, balance };
            //   }
            
            //   const rows = [
            //     createData(1, 10000, 10000),
            //     createData(2, 10000, 30000),
            //     createData(3, 10000, 60000),
            //     createData(4, 10000, 100000),
            //     createData(5, 10000, 150000),
            //   ];



export default function PortfolioValue({investData}) {
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left">Year</TableCell>
                        <TableCell align="left">Contribution Amount</TableCell>
                        <TableCell align="right">Balance</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {investData.map(({year, contribution, balance}) => (
                        <TableRow
                        key={year}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left" component="th" scope="row">
                                {year}
                            </TableCell>
                            <TableCell align="left">{contribution}</TableCell>
                            <TableCell align="right">{parseFloat(balance).toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    )
}