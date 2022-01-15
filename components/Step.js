import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";


const Step = ({ text, children }) => {
  return (
    <Flex align="center" direction="column">
      <Flex color="blue.600" rounded="50" justify="center" align="center" w="72px" h="72px" fontSize="4xl" backgroundColor="blue.100">
        {children}
      </Flex>
      <Heading mt={4} fontSize="lg">{ text }</Heading>
    </Flex>
  );
};

export default Step;
