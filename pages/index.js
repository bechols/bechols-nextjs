import Head from "next/head";
import NextLink from "next/link";
import Link from "next/link";
import Image from "next/image";
import pic from "../public/ben_and_liz_point_lobos.jpeg";
import { Box, VStack, Stack, Heading } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

function CTACard({ heading, pagename, link }) {
  return (
    <NextLink href={link} passHref>
      <Link variant="ghost">
        <Box p={5} shadow="md" borderWidth="1px" w="100%">
          <Heading fontSize="lg">{heading}</Heading>
          <Heading fontSize="sm">{pagename}{'  '}<ArrowRightIcon /></Heading>
        </Box>
      </Link>
    </NextLink>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ben Echols</title>
      </Head>
      <Stack
        alignItems="center"
        spacing={12}
        w="full"
        direction={{ base: "column-reverse", md: "row" }}
        as="section"
      >
        <VStack spacing={3} alignItems="flex-start" w="full">
          <Heading size="lg">Ben Echols</Heading>
          <Heading size="md">
            Trying to leave it better than I found it.
          </Heading>
          <CTACard
            heading="I'm a product manager at Confluent."
            pagename="About Me"
            link="/about"
          />
          <CTACard heading="I read a lot." pagename="Books" link="/books" />
          <CTACard
            heading="The world is fascinating."
            pagename="Interesting"
            link="/interesting"
          />
        </VStack>
        <Box rounded="20px" overflow="hidden" maxW="md">
          <Image src={pic} alt="Ben with his favorite person." />
        </Box>
      </Stack>
    </div>
  );
}
