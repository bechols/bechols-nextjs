import NextLink from "next/link";
import {
  Container,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { getAllMDXInFolder } from "../../src/utils/getAllMDXInFolder";

export default function Interesting({ posts }) {
  const bg = useColorModeValue("williamsGold", "williamsPurple");
  return (
    <Container>
    <Heading size="lg">Interesting</Heading>
      {posts.map((post, index) => (
        <NextLink href={"/interesting/" + post.slug} passHref>
          <Link _hover={"none"}>
            <Container
              p={5}
              my={5}
              shadow="md"
              borderWidth="1px"
              _hover={{
                bg: bg,
              }}
              key={index}
              w="100%"
            >
              <VStack>
                <Heading fontSize="lg">{post.title}</Heading>
                <Text>{post.source}</Text>
              </VStack>
            </Container>
          </Link>
        </NextLink>
      ))}
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllMDXInFolder("interesting");

  const props = {
    posts,
  };

  return {
    props,
  };
}
