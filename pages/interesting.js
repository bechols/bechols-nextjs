// Why this isn't index.js inside pages/interesting: because I'm lazily avoiding filtering out this page when getting the list of items from the filesystem
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Box,
  Flex,
  Spacer,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Interesting({ posts }) {
  return (
    <Box w="100%">
      {posts.map((post) => (
        <Box p={5} shadow="md" borderWidth="1px" w="100%">
          <VStack>
            <HStack>
              <Box>
                <Heading fontSize="lg">{post.meta.title}</Heading>
              </Box>
              <Spacer />
              <Box>
                <Link href={post.meta.sourcelink} isExternal>
                  <Text>
                    {"Source: "}
                    {post.meta.source}
                  </Text>
                </Link>
              </Box>
            </HStack>
            <div>{post.content}</div>
          </VStack>
        </Box>
      ))}
    </Box>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "pages/interesting");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      meta: data,
      content: content,
    };
  });

  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}
