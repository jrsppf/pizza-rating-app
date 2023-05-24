import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ReviewedPizzaCard from "./ReviewedPizzaCard";
import NavBar from "./ResponsiveAppBar";
import Footer from "./Footer";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="#FF5733"
            gutterBottom
          >
            Welcome to Friday Night Sliceadelphia
          </Typography>
          <Typography variant="h5" align="center" color="#00A6ED" paragraph>
            Sliceadelphia is a pizza project started by Leah and Jacob in 2023.
            Keep up with us keeping track of all the pizzas we've tried in the
            Philadelphia area. Rate and review your favorite pizzas, share
            mouth-watering pictures, and discover new pizzerias in town.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <ReviewedPizzaCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
