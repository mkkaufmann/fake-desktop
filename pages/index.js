import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box } from "@chakra-ui/core";
import { Window } from "./components/window";
export default function Home() {
  return (
    <Box className="App">
      <Window title="Topbar" />
    </Box>
  );
}
