import NextLink from "next/link";
import { Box, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { getAllMDXInFolder } from "../../src/utils/getAllMDXInFolder";

export default function Interesting({ posts }) {
  return (
    <Box w="100%">
      {posts.map((post, index) => (
        <Box p={5} mb={5} shadow="md" borderWidth="1px" w="100%" key={index}>
          <NextLink href={"/interesting/" + post.slug} passHref>
            <Link>
              <VStack>
                <Heading fontSize="lg">{post.title}</Heading>
                <Text>{post.source}</Text>
              </VStack>
            </Link>
          </NextLink>
        </Box>
      ))}
    </Box>
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
