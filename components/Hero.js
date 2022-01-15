import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <Flex
            m="50px auto 0"
            maxW="1200px"
            w="100%"
            align="center"
            justify="center"
            py={7}
            px={4}
        >
            <Box maxW="469px" w="100%" h="469px" position="relative">
                <Image src="/assets/home-mock.png" layout="fill" objectFit="cover"/>
            </Box>
            <Box ml={8}>
                <Heading as="h1" fontSize={42}>Tweet, Style and Share</Heading>
                <Text fontSize="lg" opacity="0.7">Style your tweet and connect with your audience.</Text>
                <Link href="./app">
                    <Button as="a"
                        fontSize="14px"
                        px={12}
                        borderRadius="lg"
                        mt={5}
                        colorScheme="blue"
                        >
                        Try the app
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default Hero
