import { Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export const MDXComponents = {
  h1: (props) => <Heading fontSize="3xl" letterSpacing="1px" {...props} />,
  h2: (props) => <Heading fontSize="xl" letterSpacing="0.8px" {...props} />,
  h3: (props) => <Heading fontSize="md" letterSpacing="0.6px" {...props} />,
  h4: (props) => <Heading fontSize="xs" letterSpacing="0.5px" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  p: (props) => <Text apply="mdx.p" py="8px" {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  li: (props) => <ListItem {...props} />,
};

export default MDXComponents;
