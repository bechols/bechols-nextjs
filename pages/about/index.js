import NextLink from "next/link";
import { HStack, Button, Center, Heading, Link, Stack } from "@chakra-ui/react";
import { GrGithub, GrMail, GrLinkedin, GrTwitter } from "react-icons/gr";
import { getAllMDXInFolder } from "../../src/utils/getAllMDXInFolder";

function ResumeEntry({ position, company, link }) {
  return (
    <Center>
      <Link href={link} variant="ghost" w="100%" isExternal>
        <Button size="sm" variant="ghost">
          {position}
          {" @ "}
          {company}
        </Button>
      </Link>
    </Center>
  );
}

export default function About({ posts }) {
  return (
    <Stack alignItems="center">
      <Heading size="lg">About Me</Heading>
      <br />
      <Heading size="md">Get in touch</Heading>
      <HStack>
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
      <br />

      <Heading size="md">Current work</Heading>
      <ResumeEntry
        position="Group Product Manager, Confluent Cloud"
        company="Confluent"
        link="https://www.confluent.io"
      />

      <br />
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
      <br />
      <br />
      {posts.map((post, index) => (
        <NextLink href={"/about/" + post.slug} passHref key={index}>
          <Link pb="5">
            <Heading size="md">{post.title}</Heading>
          </Link>
        </NextLink>
        
      ))}
    </Stack>
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
