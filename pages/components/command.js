import React, { useState } from "react";
import Typist from "react-typist";
import { Box, Text, SimpleGrid } from "@chakra-ui/core";
export const Command = ({ command }) => {
  const [finishedTyping, setFinishedTyping] = useState(false);
  return (
    <Box>
      <Text my={0} fontWeight={500} fontSize="sm" fontFamily="monospace">
        <Box display="flex" flexDirection="row" alignItems="center">
          <span style={{ color: "#fff", paddingRight: "5px" }}>
            {`⭢ ${command.dir}`}
          </span>
          <Typist onTypingDone={() => setFinishedTyping(true)}>
            <span style={{ color: "#ffcb05" }}>{command.command}</span>
          </Typist>
        </Box>
      </Text>
      {!!finishedTyping && (
        <SimpleGrid columns={2} w="full">
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
      )}
    </Box>
  );
};
