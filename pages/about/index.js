import NextLink from "next/link";
import {
  HStack,
  Button,
  Container,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { GrGithub, GrMail, GrLinkedin, GrTwitter } from "react-icons/gr";

function ResumeEntry({ position, company, link }) {
  return (
    <Button as={Link} href={link} size="sm" variant="ghost" isExternal>
      {position}
      {" @ "}
      <Link href={link} isExternal>
        {company}
      </Link>
    </Button>
  );
}

export default function About() {
  return (
    <Text>
      <Container>
        <Heading size="lg">About Me</Heading>
        <br />
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
        <NextLink href="/about/manual" passHref>
          <Link>
            <Heading size="sm">User manual for working with me</Heading>
          </Link>
        </NextLink>
        <br />
        <NextLink href="/about/how_i_got_into_pm" passHref>
          <Link>
            <Heading size="sm">How I got into product management</Heading>
          </Link>
        </NextLink>
        <br />

        <Heading size="md">Current Work</Heading>
        <ResumeEntry
          position="Group Product Manager, Confluent Cloud"
          company="Confluent"
          link="https://www.confluent.io"
        />

        <br />
        <Heading size="md">Previous Work</Heading>
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
      </Container>
    </Text>
  );
}
