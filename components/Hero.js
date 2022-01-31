import { Button } from '@chakra-ui/button'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <Flex
            m={{base:"80px auto",md:"50px auto 0"}}
            maxW="1200px"
            w="100%"
            align="center"
            justify="center"
            direction={{base:'column', md: 'row'}}
            py={7}
            px={4}
        >
            <Box display={{base: "none", md: "block"}} maxW="469px" w="100%" h="469px" position="relative">
                <img src="/assets/home-mock.png"/>
            </Box>
            <Box ml={{base:0, md:8}}>
                <Heading as="h1" fontSize={{base: 28, md:42}}>Tweet, Style and Share</Heading>
                <Text fontSize={['sm', 'lg']} opacity="0.7">Style your tweet and connect with your audience.</Text>
                <Link href="./app">
                    <Button as="a"
                        fontSize="14px"
                        px={12}
                        borderRadius="lg"
                        mt={5}
                        colorScheme="blue"
                        w={{base: '100%', md: 'auto'}}
                        >
                        Try the app
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}

export default Hero
