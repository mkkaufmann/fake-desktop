import React from "react";
import { Window } from "./window";
import { Box, Text } from "@chakra-ui/core";
import { Command } from "./command";
export const Terminal = () => {
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
    <Window
      title="Terminal"
      content={
        <>
          {commands.map((command, index) => {
            return (
              <Command
                key={command.command}
                command={command}
                isTyped={true}
                delay={1000}
              />
            );
          })}

          <Text my={0} fontWeight={500} fontSize="sm" fontFamily="monospace">
            <span style={{ color: "#fff", paddingRight: "5px" }}>
              {`⭢ ${commands[commands.length - 1].dir}`}
            </span>
          </Text>
        </>
      }
      bg="#00274cdd"
    />
  );
};
