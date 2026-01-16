import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "white",
        color: "text.primary",
        py: 8,
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color="secondary.main"
            >
              Pink Sky Travel
            </Typography>
            <Typography mb={2} variant="body2" color="text.secondary">
              🌟Somos una empresa 100% mexicana con el propósito de hacer que el
              viaje de tus sueños se haga realidad con servicios de calidad.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 4 }}>
            <Typography mb={2} variant="body2" color="text.secondary">
              📜 Registro Nacional de turismo (RNT):  04090151700
            </Typography>
            <Typography mb={2} variant="body2" color="text.secondary">
              🤝 Socios: Asociación Mexicana de Agencias de Viajes de la Ciudad
              de México A.C.
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 2,
            pt: 4,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="caption" color="text.secondary">
            &copy; {new Date().getFullYear()} Pink Sky Travel.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Hecho con ❤️ en México
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
