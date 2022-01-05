import { Box, Flex, Heading } from "@chakra-ui/layout";
import { FaTwitter } from "react-icons/fa";

const Brand = () => {
  return (
    <Flex align="center" pl={4}>
      <Box fontSize="xl" color="#90CDf4">
        <FaTwitter />
      </Box>
      <Heading
        ml={1}
        letterSpacing="-1px"
        textAlign="center"
        fontWeight="extrabold"
        fontSize="18px"
      >
        Twicky{" "}
        <Heading as="span" fontWeight="light" fontSize="16px" ml={1}>
          | style your tweet
        </Heading>
      </Heading>
    </Flex>
  );
};

export default Brand;
