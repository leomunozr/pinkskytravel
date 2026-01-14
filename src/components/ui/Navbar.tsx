'use client';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}
          >
            Pink Sky Travel
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="primary"
              component={Link}
              href="/catalogo"
              sx={{ fontWeight: 600 }}
            >
              Catálogo
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              component={Link}
              href="/bespoke"
              sx={{ borderWidth: 2, '&:hover': { borderWidth: 2 } }}
            >
              A Medida
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
