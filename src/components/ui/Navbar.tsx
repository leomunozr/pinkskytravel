'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h5"
          component={Link}
          href="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'secondary.main', fontWeight: 'bold' }}
        >
          Pink Sky Travel
        </Typography>
        <Box>
          <Button color="inherit" component={Link} href="/catalogo">
            Catálogo
          </Button>
          <Button color="inherit" component={Link} href="/bespoke">
            A Medida
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
