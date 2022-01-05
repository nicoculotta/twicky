import { Button } from "@chakra-ui/button"
import { Input } from "@chakra-ui/input"
import { Flex } from "@chakra-ui/layout"
import { FiSearch } from "react-icons/fi"


const InputSearch = ({tweetUrl, setTweetUrl, handleStyle}) => {
    return (
        <Flex w="100%" maxW="500px" justify="center">
          <Input
            variant="filled"
            placeholder="Paste your Tweet"
            value={tweetUrl}
            borderRadius="xl"
            onChange={(e) => setTweetUrl(e.target.value)}
            focusBorderColor="blue.200"
            fontSize="14px"
            isTruncated
          />
          <Button 
            colorScheme='blue'
            onClick={handleStyle}
            fontSize="xl"
            borderRadius="xl"
            ml={2}
            p={3}
          >
            <FiSearch/>
          </Button>
        </Flex>
    )
}

export default InputSearch
