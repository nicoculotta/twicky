import { useState, useRef, useEffect } from "react";
import { ColorModeScript, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import theme from "../themes/theme";
import themeTweet from "../themes/theme-tweet";

import { Flex, Button, Text, Box, Divider, Grid } from "@chakra-ui/react";
import { VscColorMode } from "react-icons/vsc";
import { getTweet } from "../helpers/getTweet";
import domtoimage from "dom-to-image";
import DesignItem from "../components/DesignItem";
import Brand from "../components/Brand";
import InputSearch from "../components/InputSearch";
import MainTweet from "../components/MainTweet";
import LoadingScreen from "../components/LoadingScreen";
import Head from "next/head";

export default function Main() {


  const { colorMode, toggleColorMode } = useColorMode();

  const [tweetUrl, setTweetUrl] = useState(
    "https://twitter.com/NicoCulotta/status/1482471126282428417"
  );
  const [tweet, setTweet] = useState(null);
  const print = useRef(null);
  const [designs, setDesigns] = useState(themeTweet);
  const [selectedDesign, setSelectedDesign] = useState(themeTweet[0]);
  const [designActive, setDesignActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [borderPrint, setBorderPrint] = useState(false);

  const handleStyle = async () => {
    // TODO VALIDAR REGEX
    /*     const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
  console.log(regex.test(tweetUrl)) */
    setLoading(true);
    const response = await getTweet(tweetUrl.split("/").at(-1));
    setLoading(false);
    setTweet(response);
  };

  const handlePrint = async (print) => {
    setBorderPrint(true);
    domtoimage.toPng(print, { width: 600, height: 600}).then(function (dataUrl) {
      let link = document.createElement("a");
      link.download = "my-tweet.png";
      link.href = dataUrl;
      link.click();
    });
    setTimeout(() => {
      setBorderPrint(false);
    }, 2000);
  };

  const handleDesign = (itemSelected) => {
    setSelectedDesign(itemSelected);
    setDesignActive(itemSelected.id);
  };

  useEffect(() => {
    handleStyle();
  }, []);

  return (
    <>
      <Head>
          <title>Twicky</title>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex
        m="0 auto"
        maxW="1200px"
        w="100%"
        align={{base: "flex-start", md: 'center'}}
        justify="space-between"
        py={{ base: 3, md: 7}}
        px={4}
        direction={{ base: 'column', md:'row'}}
      >
        <Flex w='100%' justify="space-between" align="center">
          <Brand colorMode={colorMode} />
          <Button
              display={{ base: "block", md: "none"}}
              variant="ghost"
              onClick={toggleColorMode}
              borderRadius="full"
              p={3}
            >
              <VscColorMode />
          </Button>
        </Flex>

        <Flex w="100%" justify="space-between" align="center">
          <InputSearch
            tweetUrl={tweetUrl}
            setTweetUrl={setTweetUrl}
            handleStyle={handleStyle}
          />

          <Button
            display={{ base: "none", md: "block"}}
            variant="ghost"
            onClick={toggleColorMode}
            borderRadius="full"
            p={3}
            mt={{base: "16px", md: 0}}
          >
            <VscColorMode />
          </Button>
        </Flex>
        
      </Flex>

      <Divider m="0 auto" maxW="1200px" />

      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {tweet && (
            <Flex maxW="1200px" m="0 auto" px={4} py={{ base: 4, md: 8}}  direction={{ base: 'column', md:'row'}}>
              <Flex w={{ base: "100%", md: "300px"}} direction="column" mr={8}>
                <Text letterSpacing="-0.25px" fontSize={{base: "sm", md: "lg"}} mb={4}>Choose a design</Text>

                <Grid
                  gap={3}
                  autoRows={{base:"72px", md:"100px"}}
                  gridTemplateColumns={{base:"repeat(auto-fill, minmax(72px, 1fr))", md:"repeat(auto-fill, 100px)" }}
                  autoFlow={{ base: "column", md: "row"}}
                  autoColumns={{base: "minmax(72px, 1fr)", md: "minmax(100px, 1fr)"}}
                  h={{ base: '90px', md: '560px'}}
                  overflowY={{ base: 'hidden', md:'auto'}}
                  overflowX={{ base: 'auto', md:'hidden'}}
                  mb={4}
                  sx={{
                    '&::-webkit-scrollbar': {
                      width: '6px',
                      borderRadius: '8px',
                      backgroundColor: `rgba(0, 0, 0, 0.05)`,
                      height: "6px"
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: `rgba(0, 0, 0, 0.1)`,
                      borderRadius: '8px',
                      
                    }
                  }}
                >
                  {designs.map((item, i) => (
                    <DesignItem
                      item={item}
                      key={i}
                      handleDesign={handleDesign}
                      designActive={designActive === i}
                    />
                  ))}
                </Grid>
              </Flex>

              <Box w="100%">
                <Box>
                  <MainTweet
                    reference={print}
                    selectedDesign={selectedDesign}
                    tweet={tweet}
                    borderPrint={borderPrint}
                  />
                </Box>

                <Flex>
                  <Button
                    onClick={() => handlePrint(print.current)}
                    fontSize="14px"
                    px={12}
                    borderRadius="lg"
                    mt={3}
                    colorScheme="blue"
                  >
                    Download as PNG
                  </Button>
                </Flex>
              </Box>
            </Flex>
          )}
        </>
      )}
    </>
  );
}
