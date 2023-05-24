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
import Album from "./Album";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Home() {
  return (
    <div>
      <NavBar />
      <Album />
      <Footer />
    </div>
  );
}
