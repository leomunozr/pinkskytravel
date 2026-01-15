'use client';
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useScrollTo } from '@/shared/lib/useScrollTo';

const Navbar = () => {
  const { handleScroll } = useScrollTo();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScrollMobile = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    handleCloseNavMenu();
    handleScroll(e);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        bgcolor: {
          xs: scrolled ? 'transparent' : 'background.paper',
          md: 'background.paper'
        },
        transition: 'background-color 0.3s ease-in-out, border-bottom 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile Menu (Hamburger Icon) */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: scrolled ? 'white' : 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              keepMounted
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                href="/#tours"
                component={Link}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleScrollMobile(e)}
              >
                <Typography textAlign="center">Próximos Tours</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                href="/catalogo"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Catálogo</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                href="/bespoke"
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">A tu medida</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: { xs: scrolled ? 'white' : 'primary.main', md: 'primary.main' },
              transition: 'color 0.3s ease-in-out',
              textAlign: { xs: 'right', md: 'left' },
              display: { xs: scrolled ? 'none' : 'flex', md: 'flex' }
            }}
          >
            Pink Sky Travel
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button
              color="secondary"
              component={Link}
              href="/#tours"
              onClick={handleScroll}
              sx={{ fontWeight: 600 }}
            >
              Próximos Tours
            </Button>
            <Button
              color="secondary"
              component={Link}
              href="/catalogo"
              sx={{ fontWeight: 600 }}
            >
              Catálogo
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/bespoke"
              sx={{ fontWeight: 600, color: 'white' }}
            >
              A tu medida
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
