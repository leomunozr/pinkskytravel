import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TerrainIcon from "@mui/icons-material/Terrain";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import Navbar from "@/widgets/layout/ui/Navbar";
import Footer from "@/widgets/layout/ui/Footer";
import { Metadata } from "next";
import { Tour } from "@/shared/types/tour";
import { client } from "@/shared/api/sanity/client";
import { GET_TOUR } from "@/shared/api/sanity/queries";
import { WhatsAppButton } from "@/shared/ui/WhatsAppButton"; // New import

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params;
//   const tour = tours[slug as keyof typeof tours];
//   if (!tour) return { title: 'Tour no encontrado' };

//   return {
//     title: `${tour.title} | Pink Sky Travel`,
//     description: tour.summary,
//   };
// }

export default async function ToursPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await client.fetch<Tour>(GET_TOUR, { slug });

  if (!tour) {
    return (
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Container sx={{ py: 8, flexGrow: 1 }}>
          <Typography variant="h3">Tour no encontrado</Typography>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            height: "500px",
            backgroundImage: `url(${tour?.imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textAlign: "center",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              gutterBottom
              component="h1"
              variant="h2"
              fontWeight="800"
              sx={{ overflowWrap: "break-word" }}
            >
              {tour.title}
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, fontWeight: 300 }}>
              {tour.summary}
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Left Column: Details */}
            <Grid size={{ xs: 12, md: 8 }}>
              {/* Features Grid */}
              <Grid container spacing={2} sx={{ mb: 6 }}>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    <AccessTimeIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      Duración
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {tour.features?.duration}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    <GroupIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      Grupo
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {tour.features?.groupSize}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    <DirectionsCarIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      Transporte
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {tour.features?.transportation}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 3 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 2,
                      bgcolor: "background.paper",
                      borderRadius: 2,
                      boxShadow: 1,
                    }}
                  >
                    <TerrainIcon color="primary" />
                    <Typography variant="body2" color="text.secondary">
                      Dificultad
                    </Typography>
                    <Typography variant="subtitle2" fontWeight="bold">
                      {tour.features?.difficulty}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

              {tour.itinerary && (
                <>
                  <Typography variant="h4" gutterBottom color="secondary.main">
                    Itinerario
                  </Typography>
                  <Box sx={{ mb: 6 }}>
                    {tour.itinerary?.map((item, index) => (
                      <Box key={index} sx={{ display: "flex", mb: 3 }}>
                        <Box sx={{ mr: 3, minWidth: "80px" }}>
                          <Chip
                            label={item.day}
                            color="primary"
                            variant="outlined"
                            size="small"
                          />
                        </Box>
                        <Box>
                          <Typography variant="h6" gutterBottom>
                            {item?.day}
                          </Typography>
                          {item?.activities?.map((activity) => (
                            <Typography variant="body1" color="text.secondary">
                              {item?.activities}
                            </Typography>
                          ))}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                  <Divider sx={{ my: 6 }} />
                </>
              )}

              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="h5" gutterBottom color="secondary.main">
                    ¿Qué incluye?
                  </Typography>
                  <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
                    {tour.included?.map((item, i) => (
                      <Box
                        component="li"
                        key={i}
                        sx={{ display: "flex", alignItems: "center", mb: 1.5 }}
                      >
                        <CheckCircleIcon
                          color="success"
                          sx={{ mr: 1.5, fontSize: 20 }}
                        />
                        <Typography variant="body1">{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Grid>
                {tour.notIncluded && (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      color="secondary.main"
                    >
                      No incluye
                    </Typography>
                    <Box component="ul" sx={{ listStyle: "none", p: 0 }}>
                      {tour.notIncluded?.map((item, i) => (
                        <Box
                          component="li"
                          key={i}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1.5,
                          }}
                        >
                          <CancelIcon
                            color="error"
                            sx={{ mr: 1.5, fontSize: 20 }}
                          />
                          <Typography variant="body1" color="text.secondary">
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                )}
              </Grid>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Logística
              </Typography>
              {tour.logistics?.meetingPoint && (
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    display="block"
                  >
                    Punto de encuentro
                  </Typography>
                  <Typography variant="body2">
                    {tour.logistics?.meetingPoint}
                  </Typography>
                </Box>
              )}
              {tour.logistics?.whatToBring && (
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    display="block"
                  >
                    Qué llevar
                  </Typography>
                  <Typography variant="body2">
                    {tour.logistics?.whatToBring}
                  </Typography>
                </Box>
              )}
            </Grid>

            {/* Right Column: Sticky Sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: "sticky", top: 24 }}>
                <Box
                  sx={{
                    bgcolor: "white",
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 3,
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                    variant="overline"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    Precio por persona
                  </Typography>
                  <Typography
                    variant="h3"
                    color="primary.main"
                    fontWeight="800"
                    gutterBottom
                  >
                    ${tour.price} {tour.currency}
                  </Typography>

                  <WhatsAppButton
                    fullWidth
                    tourTitle={tour.title}
                    sx={{ mb: 2 }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
