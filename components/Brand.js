import { Image } from "@chakra-ui/image";
import { Flex, Link } from "@chakra-ui/layout";

const Brand = ({ colorMode }) => {
  return (
    <Flex align="center" pl={4}>
      <Link href="./">
      <Image w="137px" src={ colorMode === "light" ? "assets/logo.svg" : "assets/logo_white.svg"}/>
      </Link>
    </Flex>
  );
};

export default Brand;
