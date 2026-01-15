import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  InfoOutlined,
  MiscellaneousServices,
  FlightTakeoff,
  ConfirmationNumber,
  TheaterComedy,
  Hotel,
  Groups,
  Language,
  QuestionAnswer,
} from "@mui/icons-material";

const Nosotros = () => {
  return (
    <Box component="section" sx={{ py: 8, bgcolor: "secondary.main" }}>
      <Container maxWidth="md" sx={{ color: "secondary.contrastText" }}>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          gutterBottom
          sx={{
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}
        >
          <MiscellaneousServices /> SERVICIOS
        </Typography>
        <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
          <Typography
            component="li"
            variant="body1"
            paragraph
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <FlightTakeoff /> PAQUETES TURÍSTICOS
            <Box
              component="span"
              sx={{
                display: "block",
                fontSize: "0.9em",
                color: "secondary.contrastText",
              }}
            >
              Nacionales e Internacionales, cruceros
            </Box>
          </Typography>
          <Typography
            component="li"
            variant="body1"
            paragraph
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <ConfirmationNumber /> EMISIÓN DE BOLETOS
            <Box
              component="span"
              sx={{
                display: "block",
                fontSize: "0.9em",
                color: "secondary.contrastText",
              }}
            >
              Autobús- Avión
            </Box>
          </Typography>
          <Typography
            component="li"
            variant="body1"
            paragraph
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <TheaterComedy /> ENTRADAS A SHOW´S DE TEMPORADA
          </Typography>
          <Typography
            component="li"
            variant="body1"
            paragraph
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <Hotel /> HOSPEDAJE, TRANSPORTACIÓN, GUÍAS
          </Typography>
          <Typography
            component="li"
            variant="body1"
            paragraph
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <Language /> Nacional e Internacional
          </Typography>
          <Typography
            component="li"
            variant="body1"
            paragraph
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <QuestionAnswer /> Español-Inglés, Italiano, Portugués
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 1,
            }}
          >
            <Groups /> GRUPOS ESCOLARES, FAMILIARES Y ESCAPADAS (1 DÍA)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Nosotros;
