import React from "react";
import { Box, Text } from "@chakra-ui/core";
import Draggable from "react-draggable";
export const Window = ({ title }) => {
  const commands = [
    {
      dir: "~",
      command: "",
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
            <Box bg="red" borderRadius="10rem" w="10px" h="10px" mx={1} />
            <Box bg="yellow" borderRadius="10rem" w="10px" h="10px" mr={1} />
            <Box bg="green" borderRadius="10rem" w="10px" h="10px" mr={1} />
          </Box>
          <Box />
          <Text color="white" fontFamily="monospace" my={1}>
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
              <Text
                color="#ffcb05"
                mt={0}
                fontWeight={1000}
                fontSize="xl"
                fontFamily="monospace"
              >
                {command.dir}
              </Text>
            );
          })}
        </Box>
      </Box>
    </Draggable>
  );
};
