import { Avatar } from "@chakra-ui/avatar";
import { AspectRatio, Box, Divider, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { ResizeFont } from "../helpers/resizeFont";
import { AiOutlineRetweet, AiOutlineHeart } from "react-icons/ai";
import { BsReply } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

const MainTweet = ({ selectedDesign, tweet, borderPrint, reference }) => {
  const [fontSize, setFontSize] = useState(null);

  useEffect(() => {
    setFontSize(ResizeFont(tweet.tweet.text));
  }, [tweet]);

  return (
    <AspectRatio maxW="600px" ratio={4 / 4} >
      <Flex
        ref={reference}
        direction="column"
        p={{ base: 4, md: 8}}
        bg={selectedDesign.background}
        bgImage={selectedDesign.image}
        bgPosition="center"
        bgSize="cover"
        bgGradient={selectedDesign.gradient}
        borderRadius={borderPrint ? "0px" : "12px"}
      >
        <Flex
          bg={selectedDesign.colorBox}
          direction="column"
          py={{ base: 4, md: 6}}
          px={{ base: 4, md: 6}}
          w="100%"
          boxShadow="xl"
          borderRadius="xl"
          backdropFilter="auto"
          backdropBlur="2px"
          border={selectedDesign.border ? selectedDesign.border : "none"}
        >
          <Flex justify="space-between">
            <Flex w="100%">
              <Avatar src={tweet.user.profile_image_url} />
              <Box ml="3">
                <Text fontWeight="bold" color={selectedDesign.colorText}>
                  {tweet.user.name}
                </Text>
                <Text fontSize="sm" color={selectedDesign.colorText}>
                  @{tweet.user.username}
                </Text>
              </Box>
            </Flex>
            <Box fontSize={{ base: "lg", md: "xl"}} color="#1D9BF0">
              <FaTwitter />
            </Box>
          </Flex>
          <Text
            lineHeight={{base: "normal", md: "130%"}}
            my={{base: 2, md: 6}}
            fontSize={{ base: `${fontSize * 0.65 }px`, md: `${fontSize}px` }}
            color={selectedDesign.colorText}
          >
            {tweet.tweet.text}
          </Text>

          {/* METRICS */}
          <Flex color={selectedDesign.colorText} align="center" justify="space-between" mt={{ base: 1, md: 4}}>
            <Flex>
              <Flex align="center" mr={{ base: 2, md: 8}}>
                <Box  fontSize={{ base: "sm", md: "2xl"}} mr={1} opacity="0.7">
                  <AiOutlineHeart />
                </Box>
                <Text>{tweet.tweet.public_metrics.like_count}</Text>
              </Flex>
              <Flex align="center" mr={{ base: 2, md: 8}}>
                <Box  fontSize={{ base: "sm", md: "2xl"}} mr={1} opacity="0.7">
                  <AiOutlineRetweet />
                </Box>
                <Text>{tweet.tweet.public_metrics.retweet_count}</Text>
              </Flex>
              <Flex align="center" mr={{ base: 2, md: 8}}>
                <Box  fontSize={{ base: "sm", md: "2xl"}} mr={1} opacity="0.7">
                  <BsReply />
                </Box>
                <Text>{tweet.tweet.public_metrics.reply_count}</Text>
              </Flex>
            </Flex>
            <Text fontSize="xs" opacity={0.3} >made with Twicky</Text>
          </Flex>
        </Flex>
      </Flex>
    </AspectRatio>
  );
};

export default MainTweet;
