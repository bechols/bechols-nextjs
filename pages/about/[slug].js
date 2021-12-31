import { GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { VStack, Heading, HStack, Text } from "@chakra-ui/react";

import { getAllMDXInFolder } from "../../src/utils/getAllMDXInFolder";
import { readMDXFile } from "../../src/utils/readMDXFile";
import MDXComponents from "../../src/components/MDXComponents";

const AboutPostPage = ({ title, source }) => {

  return (
    <VStack spacing={8} w="full" alignItems="stretch">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="xl">{title}</Heading>
      </VStack>
      <MDXRemote {...source} components={MDXComponents} />
    </VStack>
  );
};

export async function getStaticPaths () {
  const posts = await getAllMDXInFolder("about");

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};


export async function getStaticProps (ctx) {
  const slug = ctx.params.slug;

  const postContent = await readMDXFile("about", slug);
  const {
    content,
    data: { title },
  } = matter(postContent);

  return {
    props: {
      source: await serialize(content),
      title,
      slug,
    },
  };
};

export default AboutPostPage;