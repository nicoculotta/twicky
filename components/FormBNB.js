import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Flex, Heading, Text, Wrap } from "@chakra-ui/layout";
import { NumberInput, NumberInputField } from "@chakra-ui/number-input";
import React, { useEffect, useRef, useState } from "react";
import Web3 from "web3";

const FormBNB = () => {
  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');

  const amountBNB = useRef();
  const [hasWallet, setHasWallet] = useState(false);

  const sendBNB = async (e) => {
    e.preventDefault();

    const wei = web3.utils.toWei(amountBNB.current.value, "ether")

     const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    console.log(accounts)

    // if at least one account
    if (accounts.length > 0) {
      // set up a transaction from logged in account
      // to a set amount, with the value in hex format

       window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: "0x1905464f36C0EEA87A949Dd4cFA92b8cDA19E4D7",
            value: web3.utils.toHex(wei),
            chain: "97"
          },
        ],
      });
    }
  };

  useEffect(() => {
    window.ethereum ? setHasWallet(true) : setHasWallet(false);
  }, []);

  const bgGray = useColorModeValue("gray.50", "whiteAlpha.50");
  const bgAvatar = useColorModeValue("white", "whiteAlpha.100");
  return (
    <>
      {hasWallet ? (
        <Flex
          direction="column"
          ml={{ base: 0, md: 4}}
          mt={{ base: 4, md: 0 }}
          p={6}
          bgColor={bgGray}
          borderRadius="12px"
          h="fit-content"
          maxW={{ base: "100%", md: "280px" }}
        >
        <Wrap mb={4}>
        <Avatar name='Ethereum' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/512px-Ethereum-icon-purple.svg.png' bgColor={bgAvatar} p={2} />
        <Avatar name='BNB' src='https://cdn.coinranking.com/B1N19L_dZ/bnb.svg?size=48x48' bgColor={bgAvatar} p={2} />
            </Wrap>
          <Heading as="h4" size="md" mb={2}>
            Want to support the app?
          </Heading>
          <Text mb={4}>
          Twicky is totally free, but if you liked and useful for you, consider supporting me

          </Text>
          <form onSubmit={sendBNB}>
            <FormControl isRequired>
              <FormLabel htmlFor="amount">Amount</FormLabel>
              <NumberInput min={0.10}>
                <NumberInputField
                  id="amount"
                  ref={amountBNB}
                  placeholder={0.2}
                />
              </NumberInput>
              <Button
                type="submit"
                mt={4}
                colorScheme="yellow"
                variant="solid"
              >
                Send a tip
              </Button>
            </FormControl>
          </form>
        </Flex>
      ) : null}
    </>
  );
};

export default FormBNB;
