import React from "react";
import Typist from "react-typist";
import { Box, Text, SimpleGrid } from "@chakra-ui/core";
export const Command = ({ command }) => {
  return (
    <Box w="full">
      <Text my={0} fontWeight={500} fontSize="sm" fontFamily="monospace">
        <Box display="flex" flexDirection="row" alignItems="center">
          <span style={{ color: "#fff", "padding-right": "5px" }}>
            {`⭢ ${command.dir}`}
          </span>
          <Typist>
            <span style={{ color: "#ffcb05" }}>{command.command}</span>
          </Typist>
        </Box>
      </Text>

      <SimpleGrid columns={2}>
        {command.output.map((chunk) => {
          return (
            <Text
              key={chunk}
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
};
