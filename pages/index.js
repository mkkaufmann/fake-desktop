import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/core";
import { Terminal } from "./components/terminal";
import { Browser } from "./components/browser";
import { Window } from "./components/window";
import { ThemeProvider } from "@chakra-ui/core";
import theme from "./theme";
export default function Home() {
  return (
    <Box className="App" overflow="hidden">
      <ThemeProvider theme={theme}>
        <Box
          w="100vw"
          h="100vh"
          backgroundImage="url(
          https://i.pinimg.com/originals/93/65/1d/93651dceeee949437c20171dd3f7cd0e.jpg
        )"
        >
          <Terminal title="hmm" />
          <Browser url="https://www.w3schools.com" />
        </Box>
      </ThemeProvider>
    </Box>
  );
}
