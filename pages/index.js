import { Flex, Heading, Text, Link, Box } from "@chakra-ui/layout";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import Step from "../components/Step";
import { BiCopy, BiPaint, BiShare } from "react-icons/bi";
import {FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { Button } from "@chakra-ui/button";
import NextLink from "next/link";
import { Image } from "@chakra-ui/image";

export default function Home() {
  return (
    <>
      <Flex
        m="0 auto"
        maxW="1200px"
        w="100%"
        align="center"
        justify="space-between"
        py={7}
        px={4}
      >
        <Brand colorMode="light" />
        <Text fontSize="sm">
          Made with love by{" "}
          <Link
            fontWeight="bold"
            href="https://nicoculotta.github.io/"
            isExternal
          >
            Nicolás Culotta
          </Link>
        </Text>
      </Flex>

      <Hero />

      {/* HOW IT WORKS */}
      <Flex
        textAlign="center"
        m="0 auto"
        maxW="900px"
        w="100%"
        mb={12}
        mt="120px"
      >
        <Heading w="100%">How it works</Heading>
      </Flex>
      <Flex
        justify="space-between"
        m="0 auto"
        maxW="800px"
        w="100%"
        mt={12}
        mb="120px"
      >
        <Step text="Copy a tweet url">
          <BiCopy />
        </Step>
        <Flex ml="30px">
          <Step text="Choose a design">
            <BiPaint />
          </Step>
        </Flex>
        <Step text="Export the image and share">
          <BiShare />
        </Step>
      </Flex>

      {/* IMAGES */}

      <Box bgGradient="linear(45deg, #d2efff, #f2fcfe)">
        <Flex m="0 auto" maxW="1200px" w="100%" pt={12} pb={6}>
          <Box w="100%" p={2}>
            <Image
              w="400px"
              rounded="8px"
              src="/assets/tweet1.png"
              objectFit="cover"
            />
          </Box>
          <Box w="100%" p={2}>
            <Image
              w="400px"
              rounded="8px"
              src="/assets/tweet2.png"
              objectFit="cover"
            />
          </Box>
          <Box w="100%" p={2}>
            <Image
              w="400px"
              rounded="8px"
              src="/assets/tweet3.png"
              objectFit="cover"
            />
          </Box>
        </Flex>

        <Box w="100%" textAlign="center">
          <NextLink href="./app">
            <Button
              fontSize="14px"
              px={12}
              borderRadius="lg"
              mb={10}
              color="white"
              bg="blackAlpha.800"
              _hover={{
                backgroundColor: "#65c6fb",
              }}
            >
              Try the app
            </Button>
          </NextLink>
        </Box>
      </Box>
    
      {/* FOOTER */}
      <Flex
        m="0 auto"
        maxW="1200px"
        w="100%"
        align="center"
        justify="space-between"
        py={7}
        px={4}
      >
        <Brand colorMode="light" />
        <Text fontSize="sm">
          Made with love by{" "}
          <Link
            fontWeight="bold"
            href="https://nicoculotta.github.io/"
            isExternal
          >
            Nicolás Culotta
          </Link>
        </Text>
        <Flex >
          <Link href="https://www.linkedin.com/in/nicolasculotta/" isExternal >
              <Box fontSize="24px" mr={2}>
                <FaLinkedin  />
              </Box>
          </Link>
          <Link href="https://github.com/nicoculotta" isExternal >
              <Box fontSize="24px"  mr={2}>
                <FaGithub  />
              </Box>
          </Link>
          <Link href="https://twitter.com/NicoCulotta" isExternal >
              <Box fontSize="24px">
                <FaTwitter  />
              </Box>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
