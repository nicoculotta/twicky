import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

const Step = ({ text, children }) => {
  return (
    <Flex
      align="center"
      direction="column"
      maxW={{ base: "100%", md: "150px" }}
      m={{ base: '16px auto', md:'0'}}
    >
      <Flex
        color="blue.600"
        rounded="50"
        justify="center"
        align="center"
        w={{ base: '56px', md: '72px'}}
        h={{ base: '56px', md: '72px'}}
        fontSize="4xl"
        backgroundColor="blue.100"
      >
        {children}
      </Flex>
      <Heading textAlign="center" mt={4} fontSize={{ base: 'md', md: 'lg'}}>
        {text}
      </Heading>
    </Flex>
  );
};

export default Step;
