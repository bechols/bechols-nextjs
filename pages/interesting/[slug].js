import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import { VStack, Heading, Link } from "@chakra-ui/react";

import { getAllMDXInFolder } from "../../src/utils/getAllMDXInFolder";
import { readMDXFile } from "../../src/utils/readMDXFile";
import MDXComponents from "../../src/components/MDXComponents";

const BlogPostPage = ({ title, source, sourcelink, mdxSource }) => {

  return (
    <VStack spacing={8} w="full" alignItems="stretch">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="lg">{title}</Heading>
        <Link href={sourcelink}>
          {source}
        </Link>
      </VStack>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </VStack>
  );
};

export async function getStaticPaths () {
  const posts = await getAllMDXInFolder("interesting");

  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export async function getStaticProps (ctx) {
  const slug = ctx.params.slug;

  const postContent = await readMDXFile("interesting", slug);
  const {
    content,
    data: { title, source, sourcelink },
  } = matter(postContent);

  return {
    props: {
      mdxSource: await serialize(content),
      title,
      source,
      sourcelink,
      slug,
    },
  };
};

export default BlogPostPage;