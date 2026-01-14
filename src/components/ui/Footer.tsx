import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} Pink Sky Travel. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 1 }}>
          Hecho con ❤️ en México
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
