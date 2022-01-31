import { Box, GridItem, Flex, Stack } from "@chakra-ui/layout";
import { BsCheckCircleFill } from "react-icons/bs";

const DesignItem = ({ item, i, handleDesign, designActive }) => {
  return (

      <GridItem
        p={3}
        w={{ base: "72px", md: "100px"}}
        h={{ base: "72px", md: "100px"}}
        bg={item.background}
        bgImage={item.image}
        bgPosition='center'
        bgSize='cover'
        bgGradient={item.gradient}
        rounded="xl"
        onClick={() => handleDesign(item)}
        pos="relative"
        display="grid"
        alignContent="center"
      >
        <Flex
          direction="column"
          justify="center"
          bg={item.colorBox}
          w="100%"
          rounded="md"
          p={2}
        >
          <Stack w="100%" spacing="3px">
            <Flex align="center" justify="center">
              <Box h="9px" w="12px" rounded="full" bg="gray.500" mr={1}></Box>
              <Stack w="100%" spacing="2px">
                <Box h="3px" w="40%" bg="gray.500"></Box>
                <Box h="3px" w="30%" bg="gray.500"></Box>
              </Stack>
            </Flex>
            <Box h="3px" w="100%" bg="gray.500"></Box>
            <Box h="3px" w="100%" bg="gray.500"></Box>
            <Box h="3px" w="100%" bg="gray.500"></Box>
          </Stack>
        </Flex>
        {
            designActive && (
                <Box
                pos="absolute"
                bottom="5px"
                right="5px"
                rounded="full"
                border="2px"
                borderColor="white"
                fontSize="xl"
                color="green.500"
                background="white"
              >
                <BsCheckCircleFill />
              </Box>
            ) 
        }

      </GridItem>
  );
};

export default DesignItem;
