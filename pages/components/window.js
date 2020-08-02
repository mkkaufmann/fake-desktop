import React, { useState } from "react";
import { Box, Text, SimpleGrid } from "@chakra-ui/core";
import { Rnd } from "react-rnd";
import { Command } from "./command";
export const Window = ({ title, content, bg }) => {
  const [currentWidth, setCurrentWidth] = useState(600);
  const [currentHeight, setCurrentHeight] = useState(400);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  return (
    <Rnd
      dragHandleClassName="window-handle"
      display="flex"
      alignItems="stretch"
      position={{ x: currentX, y: currentY }}
      size={{ width: currentWidth, height: currentHeight }}
      onDrag={(e, d) => {
        setCurrentX(parseInt(d.x, 10));
        setCurrentY(parseInt(d.y, 10));
      }}
      onResize={(e, direction, refToElement, delta, position) => {
        setCurrentWidth(parseInt(refToElement.style.width, 10));
        setCurrentHeight(parseInt(refToElement.style.height, 10));
      }}
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
        h="20px"
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
        <Text color="white" fontFamily="monospace" userSelect="none">
          {title}
        </Text>
        <Box />
      </Box>
      <Box
        borderBottomLeftRadius="0.25rem"
        borderBottomRightRadius="0.25rem"
        bg={bg}
        textAlign="left"
        p={1}
        h={currentHeight - 20}
      >
        {content}
      </Box>
    </Rnd>
  );
};
