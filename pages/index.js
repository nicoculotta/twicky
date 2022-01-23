import { Flex, Heading, Text, Link, Box } from "@chakra-ui/layout";
import Brand from "../components/Brand";
import Hero from "../components/Hero";
import Step from "../components/Step";
import { BiCopy, BiPaint, BiShare } from "react-icons/bi";
import {FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { Button } from "@chakra-ui/button";
import NextLink from "next/link";
import { Image } from "@chakra-ui/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
        <Head>
            <title>Twicky</title>
        </Head>
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
        <Text fontSize={{ base: '11px', md: '14px'}}>
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
        maxW="900px"
        w="100%"
        m={{ base: "16px auto 0", md: "64px auto 0"}}
      >
        <Heading w="100%" fontSize={{base: '2xl', md: '3xl'}}>How it works</Heading>
      </Flex>
      <Flex
        direction={{ base: 'column', md: 'row'}}
        align="center"
        justify="space-between"
        maxW="800px"
        w="100%"
        m={{ base: "36px auto", md: "24px auto 64px"}}
      >
        <Step text="Copy a tweet url">
          <BiCopy />
        </Step>
          <Step text="Choose a design">
            <BiPaint />
          </Step>
        <Step text="Export the image and share">
          <BiShare />
        </Step>
      </Flex>

      {/* IMAGES */}

      <Box bgGradient="linear(45deg, #d2efff, #f2fcfe)">
        <Flex justify="center"m="0 auto" maxW="1200px" w="100%" pt={12} pb={6} direction={{base:'column', md:'row'}}>
          <Flex w="100%" p={2} justify="center">
            <Image
              w={{ base: 328, sm: 400}}
              rounded="8px"
              src="/assets/tweet1.png"
              objectFit="cover"
            />
          </Flex>
          <Flex w="100%" p={2} justify="center">
            <Image
              w={{ base: 328, sm: 400}}
              rounded="8px"
              src="/assets/tweet2.png"
              objectFit="cover"
            />
          </Flex>
          <Flex w="100%" p={2} justify="center">
            <Image
              w={{ base: 328, sm: 400}}
              rounded="8px"
              src="/assets/tweet3.png"
              objectFit="cover"
            />
          </Flex>
        </Flex>

        <Box w="100%" textAlign="center" p="0 16px">
          <NextLink href="./app">
            <Button
              fontSize="14px"
              px={12}
              borderRadius="lg"
              mb={10}
              color="white"
              bg="blackAlpha.800"
              w={{ base: '100%', sm: 'auto'}}
              maxW={{ base: 327, sm: 'auto'}}
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
        m={{ base: '24px 0', md: '0 auto'}}
        h={{ base: 170, md: 'auto'}}
        maxW="1200px"
        w="100%"
        align="center"
        justify="space-between"
        py={7}
        px={4}
        direction={{ base:'column', md: 'row'}}
      >
        <Brand colorMode="light" />
        <Text fontSize={{ base: '11px', md: '14px'}}>
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
