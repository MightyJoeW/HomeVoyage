import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HouseIcon from '@mui/icons-material/House';
import { Link } from 'react-router';

const navLinkStyle = {
  color: 'white',
  textDecoration: 'none',
};

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='home'
            sx={{ mr: 2 }}
          >
            <Link to='/' style={navLinkStyle}>
              <HouseIcon />
            </Link>
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Home Voyage
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
