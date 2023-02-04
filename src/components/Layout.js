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
        
          <Button as={NextLink} href="/" size="md" variant="ghost">
            Ben Echols
          </Button>
        
        <HStack alignItems="center" spacing={{ base: 0, md: 2 }}>
          
            <Button as={NextLink} href="/about" size="sm" variant="ghost">
              About Me
            </Button>
          
          
            <Button as={NextLink} href="/books" size="sm" variant="ghost">
              Books
            </Button>
          
          
            <Button as={NextLink} href="/interesting" size="sm" variant="ghost">
              Interesting
            </Button>
        </HStack>
      </HStack>
    </>
  );
};

const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      py={3}
    >
      <Link href="https://github.com/bechols/bechols-nextjs">
        © Ben Echols {new Date().getFullYear()}. {process.env.gitShaShort}
      </Link>
      <IconButton
            aria-label="toggle theme"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            variant="ghost"
            size="sm"
            onClick={toggleColorMode}
          />
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
