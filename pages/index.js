import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/core";
import { Window } from "./components/window";
import { ThemeProvider } from "@chakra-ui/core";
import theme from "./theme";
export default function Home() {
  return (
    <Box className="App">
      <ThemeProvider theme={theme}>
        <Window title="Michael Kaufmann" />
      </ThemeProvider>
    </Box>
  );
}
