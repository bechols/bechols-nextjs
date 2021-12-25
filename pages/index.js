import Head from "next/head";
import NextLink from "next/link";
import Link from "next/link";
import Image from "next/image";
import pic from "../public/ben_and_liz_point_lobos.jpeg";
import { Box, VStack, HStack, Stack, Heading } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { SiApachekafka } from 'react-icons/si';
import { GiBookshelf, GiRocketFlight } from 'react-icons/gi';

function CTACard({ heading, link, icon }) {
  return (
    <NextLink href={link} passHref>
      <Link variant="ghost">
        <Box p={5} shadow="md" borderWidth="1px" w="100%">
          <HStack>
          <Heading fontSize="lg">{heading}</Heading>
          {icon}
          </HStack>
          
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
            link="/about"
            icon={<SiApachekafka />}
          />
          <CTACard 
            heading="I read a lot." 
            link="/books" 
            icon={<GiBookshelf />} 
          />
          <CTACard
            heading="The world is fascinating."
            link="/interesting"
            icon={<GiRocketFlight />}
          />
        </VStack>
        <Box rounded="20px" overflow="hidden" maxW="md">
          <Image src={pic} alt="Ben with his favorite person." />
        </Box>
      </Stack>
    </div>
  );
}
