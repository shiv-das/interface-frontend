import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Slideshow from "../components/Slideshow";
import { StyledEngineProvider } from "@mui/material/styles";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hod from "../components/Hod";
import BranchChapter from "../components/BranchChapter";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    background: {
      paper: "black",
    },
    primary: {
      main: "#000",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
const style = {
  bgcolor: "background.paper",
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>INTERFACE FRONTEND</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="logo" href="/logo.png" />
      </Head>
      <header>
        <React.StrictMode>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <ResponsiveAppBar sx={style} />
            </ThemeProvider>
          </StyledEngineProvider>
        </React.StrictMode>
        <Slideshow />
        <BranchChapter />
        <Hod />
      </header>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" INTERFACE "}
          <span className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Interface Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
