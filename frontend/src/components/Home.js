import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import Album from "./Album";

export default function Home() {
  return (
    <>
      <Header />
      <Album />
      <Footer />
    </>
  );
}
