import {
  HStack,
  Heading,
  IconButton,
  useColorMode,
  Button,
  Link,
  VStack,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import Head from "next/head";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Ben Echols</title>
        <link rel="icon" href="/williams-favicon-32x32.png" />
      </Head>
      <HStack
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        py={3}
      >
        <NextLink href="/" passHref>
          <Button as={Link} size="md" variant="ghost">
            Ben Echols
          </Button>
        </NextLink>
        <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
          <NextLink href="/about" passHref>
            <Button as={Link} size="sm" variant="ghost">
              About Me
            </Button>
          </NextLink>
          <NextLink href="/books" passHref>
            <Button as={Link} size="sm" variant="ghost">
              Books
            </Button>
          </NextLink>
          <NextLink href="/interesting" passHref>
            <Button as={Link} size="sm" variant="ghost">
              Interesting
            </Button>
          </NextLink>
          <IconButton
            aria-label="toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
            size="sm"
            onClick={toggleColorMode}
          />
        </HStack>
      </HStack>
    </>
  );
};

const Footer = () => {
  return (
    <HStack
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      py={3}
    >
      <a href="https://github.com/bechols/bechols-nextjs">
        © Ben Echols {new Date().getFullYear()}. {process.env.gitShaShort}
      </a>
    </HStack>
  );
};

export default function Layout({ children }) {
  return (
    <Container
      display="flex"
      maxW="container.lg"
      minH={{ base: "auto", md: "100vh" }}
      px={{ base: 4, lg: 0 }}
      centerContent
    >
      <VStack flex={1} spacing="12px" alignItems="stretch" w="full">
        <Header />
        {children}
      </VStack>
      <Footer />
    </Container>
  );
}
