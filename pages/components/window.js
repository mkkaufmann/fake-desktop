import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/core";
import { Rnd } from "react-rnd";
import { Command } from "./command";
export const Window = ({ title }) => {
  const commands = [
    {
      dir: "~",
      command: "ls",
      output: ["Projects", "Resume"],
    },
    {
      dir: "~",
      command: "cd Projects",
      output: [],
    },
    {
      dir: "Projects",
      command: "ls",
      output: ["Set", "MorseCode", "Vex2019"],
    },
  ];
  return (
    <Rnd
      dragHandleClassName="window-handle"
      size={{ width: "300px", height: 300 }}
    >
      <Box
        borderTopLeftRadius="0.25rem"
        borderTopRightRadius="0.25rem"
        bg="black"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        className="window-handle"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          position="absolute"
        >
          <Box bg="#ff605c" borderRadius="10rem" w="10px" h="10px" mx={1} />
          <Box bg="#ffbd44" borderRadius="10rem" w="10px" h="10px" mr={1} />
          <Box bg="#00ca4e" borderRadius="10rem" w="10px" h="10px" mr={1} />
        </Box>
        <Box />
        <Text color="white" fontFamily="monospace" my={1} userSelect="none">
          {title}
        </Text>
        <Box />
      </Box>
      <Box
        borderBottomLeftRadius="0.25rem"
        borderBottomRightRadius="0.25rem"
        bg="#00274cdd"
        textAlign="left"
        p={1}
      >
        {commands.map((command, index) => {
          return <Command key={command.command} command={command} />;
        })}

        <Text my={0} fontWeight={500} fontSize="sm" fontFamily="monospace">
          <span style={{ color: "#fff", paddingRight: "5px" }}>
            {`⭢ ${commands[commands.length - 1].dir}`}
          </span>
        </Text>
      </Box>
    </Rnd>
  );
};
