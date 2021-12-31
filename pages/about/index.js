import NextLink from "next/link";
import {
  HStack,
  Container,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrGithub, GrMail, GrLinkedin, GrTwitter } from "react-icons/gr";
import { getAllMDXInFolder } from "../../src/utils/getAllMDXInFolder";

function ResumeEntry({ position, company, link }) {
  const bg = useColorModeValue('williamsGold','williamsPurple')
  return (
    <Container
      p={5}
      my={5}
      shadow="md"
      borderWidth="1px"
      _hover={{
        bg: bg,
      }}
    >
      <Link href={link} isExternal _hover={"none"}>
        <HStack justifyContent="space-between">
          <Container>
            <Heading size="sm">{position}</Heading>
            <Text>{company}</Text>
          </Container>
          {/* {!imagelink.includes("nophoto") && (
            <Image src={imagelink} alt={"Cover of " + title} />
          )} */}
        </HStack>
      </Link>
    </Container>
  );
}

export default function About({ posts }) {
  const bg = useColorModeValue("williamsPurple", "williamsGold");
  const bgInvert = useColorModeValue("williamsGold", "williamsPurple");

  return (
    <VStack spacing="16px" align="flex-start">
      <Heading size="lg">About Me</Heading>
      <Heading size="md">Get in touch</Heading>
      <HStack spacing="16px">
        <Link href="mailto:benjamin.echols@gmail.com" isExternal>
          <GrMail fontSize="32px" />
        </Link>
        <Link href="https://linkedin.com/in/benechols" isExternal>
          <GrLinkedin fontSize="32px" />
        </Link>
        <Link href="https://github.com/bechols" isExternal>
          <GrGithub fontSize="32px" />
        </Link>
        <Link href="https://twitter.com/bechols" isExternal>
          <GrTwitter fontSize="32px" />
        </Link>
      </HStack>
      {posts.map((post, index) => (
        <NextLink href={"/about/" + post.slug} passHref key={index}>
          <Link pb="5px" _hover="none">
            <Heading
              size="md"
              textDecoration="underline"
              _hover={{
                color: bg,
                bg: bgInvert
              }}
            >
              {post.title}
            </Heading>
          </Link>
        </NextLink>
      ))}
      <Heading size="md">Current work</Heading>
      <ResumeEntry
        position="Group Product Manager, Confluent Cloud"
        company="Confluent"
        link="https://www.confluent.io"
      />
      <Heading size="md">Work history</Heading>
      <ResumeEntry
        position="Director of Product Management, Data and Analytics"
        company="HouseCanary"
        link="https://www.housecanary.com"
      />
      <ResumeEntry
        position="Senior Product Manager, Bitbucket Cloud"
        company="Atlassian"
        link="https://www.atlassian.com"
      />
      <ResumeEntry
        position="Director of Product Management"
        company="Originate"
        link="https://www.originate.com"
      />
      <ResumeEntry
        position="Product Manager"
        company="Location Labs"
        link="https://www.locationlabs.com"
      />
      <ResumeEntry
        position="Research Training Consultant + Research Associate"
        company="Forrester Research"
        link="https://www.forrester.com"
      />
      <ResumeEntry
        position="BA in Philosophy + Cognitive Science concentration"
        company="Williams College"
        link="https://www.williams.edu"
      />
    </VStack>
  );
}

export async function getStaticProps() {
  const posts = await getAllMDXInFolder("about");

  const props = {
    posts,
  };

  return {
    props,
  };
}
