import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Link } from 'react-router-dom'

export default function Bar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6"
            component="div" 
            align="left" 
            sx={{ flexGrow: 1 }}
            component={Link}
            style={{textDecoration: 'none', color: 'white'}}
            to="/">
            Portfolio Sandbox
          </Typography>
            <Button href="/Login" color="inherit">Login</Button>
            <Button href="/Register" color="inherit">Register</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
