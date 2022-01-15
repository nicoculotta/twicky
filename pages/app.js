import { useState, useRef, useEffect } from "react";
import { ColorModeScript, Skeleton } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import theme from "../themes/theme";
import themeTweet from "../themes/theme-tweet";

import { Flex, Button, Text, Box, Divider, Wrap } from "@chakra-ui/react";
import { VscColorMode } from "react-icons/vsc";
import { getTweet } from "../helpers/getTweet";
import domtoimage from "dom-to-image";
import DesignItem from "../components/DesignItem";
import Brand from "../components/Brand";
import InputSearch from "../components/InputSearch";
import MainTweet from "../components/MainTweet";
import LoadingScreen from "../components/LoadingScreen";

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
    domtoimage.toPng(print).then(function (dataUrl) {
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
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Flex
        m="0 auto"
        maxW="1200px"
        w="100%"
        align="center"
        justify="space-between"
        py={7}
        px={4}
      >
        <Brand colorMode={colorMode} />
        <InputSearch
          tweetUrl={tweetUrl}
          setTweetUrl={setTweetUrl}
          handleStyle={handleStyle}
        />

        <Button
          variant="ghost"
          onClick={toggleColorMode}
          borderRadius="full"
          p={3}
        >
          <VscColorMode />
        </Button>
      </Flex>

      <Divider m="0 auto" maxW="1200px" />

      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {tweet && (
            <Flex maxW="1200px" m="0 auto" px={4} py={8}>
              <Flex w="30%" direction="column" mr={8}>
                <Text letterSpacing="-0.25px">Choose a design</Text>

                <Wrap 
                  w="100%" 
                  h="100%" 
                  maxH="564px"
                  mt={4}
                  spacing={4}
                  overflowY="scroll"
                  overflowX="hidden"
                  sx={{
                    '&::-webkit-scrollbar': {
                      width: '6px',
                      borderRadius: '8px',
                      backgroundColor: `rgba(0, 0, 0, 0.05)`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: `rgba(0, 0, 0, 0.1)`,
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
                </Wrap>
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
