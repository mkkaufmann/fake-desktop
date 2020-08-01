import React from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/core";
import Draggable from "react-draggable";
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
    <Draggable
      handle=".window-handle"
      defaultPosition={{
        x: window.innerWidth / 2 - 250,
        y: window.innerHeight / 2 - 160,
      }}
    >
      <Box w="500px">
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
          h="300px"
          borderBottomLeftRadius="0.25rem"
          borderBottomRightRadius="0.25rem"
          bg="#00274cdd"
          textAlign="left"
          p={1}
        >
          {commands.map((command) => {
            return (
              <Box key={command.command}>
                <Text
                  my={0}
                  fontWeight={500}
                  fontSize="sm"
                  fontFamily="monospace"
                >
                  <span style={{ color: "#fff", "padding-right": "5px" }}>
                    {`⭢ ${command.dir}`}
                  </span>
                  <span style={{ color: "#ffcb05" }}>{command.command}</span>
                </Text>

                <SimpleGrid columns={2}>
                  {command.output.map((chunk) => {
                    return (
                      <Text
                        my={0}
                        color="white"
                        fontSize="sm"
                        fontWeight="500"
                        fontFamily="monospace"
                      >
                        {chunk}
                      </Text>
                    );
                  })}
                </SimpleGrid>
              </Box>
            );
          })}

          <Text my={0} fontWeight={500} fontSize="sm" fontFamily="monospace">
            <span style={{ color: "#fff", "padding-right": "5px" }}>
              {`⭢ ${commands[commands.length - 1].dir}`}
            </span>
          </Text>
        </Box>
      </Box>
    </Draggable>
  );
};
