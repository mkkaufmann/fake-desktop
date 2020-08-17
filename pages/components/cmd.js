import React, { useState } from "react";
import { Window } from "./window";
import { Box, Text, Input, InputGroup, InputLeftAddon } from "@chakra-ui/core";
import { Command } from "./command";
export const Cmd = () => {
  const [commands, setCommands] = useState([]);
  const [currentDir, setCurrentDir] = useState("~");
  return (
    <Window
      title="Terminal"
      content={
        <>
          <InputGroup>
            <InputLeftAddon
              px={0}
              py={2}
              children={<span style={{ color: "#fff" }}>{currentDir}</span>}
            />

            <Input
              type="text"
              p={1}
              bg="#00000000"
              h="20px"
              color="#ffcb05"
              fontFamily="monospace"
            />
          </InputGroup>
        </>
      }
      bg="#00274cdd"
    />
  );
};
