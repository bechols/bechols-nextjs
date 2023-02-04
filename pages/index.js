import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Container,
  Link,
  VStack,
  HStack,
  Stack,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GiBookshelf, GiEarthAmerica } from "react-icons/gi";

function CTACard({ heading, link, icon }) {
  const bg = useColorModeValue("williamsGold", "williamsPurple");
  return (
    <Container
      p={5}
      shadow="md"
      borderWidth="1px"
      _hover={{
        bg: bg,
      }}
      userSelect="none"
    >
        <Link as={NextLink} href={link} variant="ghost" w="100%" _hover={{}}>
          <HStack>
            <Text fontSize="xl">{heading}</Text>
            {icon}
          </HStack>
        </Link>
    </Container>
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
            heading="I'm working on something new."
            link="/about"
            icon={<RiLightbulbFlashLine />}
          />
          <CTACard
            heading="I read a lot."
            link="/books"
            icon={<GiBookshelf />}
          />
          <CTACard
            heading="The world is fascinating."
            link="/interesting"
            icon={<GiEarthAmerica />}
          />
        </VStack>
        <Box maxW="md">
          <Img
            src={"/ben_and_liz_point_lobos.jpeg"}
            alt="Ben with his favorite person."
            objectFit="cover"
            borderRadius="20px"
          />
        </Box>
      </Stack>
    </div>
  );
}
