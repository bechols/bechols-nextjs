import NextLink from "next/link";
import {
  HStack,
  Container,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { GrGithub, GrMail, GrLinkedin, GrTwitter } from "react-icons/gr";
import { getAllMDXInFolder } from "../../src/utils/getAllMDXInFolder";

function ResumeEntry({ position, company, link }) {
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
      <LinkBox>
      <LinkOverlay href={link} isExternal _hover={{}}>
        <HStack justifyContent="space-between">
          <Container>
            <Heading size="sm">{position}</Heading>
            <Text>{company}</Text>
          </Container>
        </HStack>
      </LinkOverlay>
      </LinkBox>
    </Container>
  );
}

export default function About({ posts }) {
  const bg = useColorModeValue("williamsPurple", "williamsGold");
  const bgInvert = useColorModeValue("williamsGold", "williamsPurple");

  return (
    <VStack spacing="12px" align="flex-start">
      <Heading size="lg">About Me</Heading>
      <HStack spacing="16px">
        <Text>Contact:</Text>
        <Link href="mailto:benjamin.echols@gmail.com" isExternal rounded="md" p="2">
          <GrMail fontSize="32px" />
        </Link>
        <Link href="https://linkedin.com/in/benechols" isExternal rounded="md" p="2">
          <GrLinkedin fontSize="32px" />
        </Link>
        <Link href="https://github.com/bechols" isExternal rounded="md" p="2">
          <GrGithub fontSize="32px" />
        </Link>
        <Link href="https://twitter.com/bechols" isExternal rounded="md" p="2">
          <GrTwitter fontSize="32px" />
        </Link>
      </HStack>
      {posts.map((post, index) => (
          <Link  href={"/about/" + post.slug} as={NextLink} pb="5px" key={index} rounded="md" p="2">
            <Text>
              {post.title}
              <ChevronRightIcon />
            </Text>
          </Link>
      ))}
      <Heading size="md">Current work</Heading>
      <ResumeEntry
        position="Co-founder and CEO"
        company="Something new"
        link="#"
      />
      <Heading size="md">Work history</Heading>
      <ResumeEntry
        position="Director of Product Management, Confluent Cloud"
        company="Confluent"
        link="https://www.confluent.io"
      />
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
