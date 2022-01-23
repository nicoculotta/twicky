import { Image } from "@chakra-ui/image";
import { Flex, Link } from "@chakra-ui/layout";

const Brand = ({ colorMode }) => {
  return (
    <Flex align="center">
      <Link href="./">
      <Image w={{base:'100px', md:'137px'}} src={ colorMode === "light" ? "assets/logo.svg" : "assets/logo_white.svg"}/>
      </Link>
    </Flex>
  );
};

export default Brand;
