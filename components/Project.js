import {
  Flex,
  Heading,
  Image,
  Box,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";

export default function Project({
  title,
  description,
  note,
  live,
  image,
  git,
}) {
  return (
    <Stack marginTop="100px !important">
      <Flex direction={{ base: "column", md: "row" }}>
        <Flex
          flex={0.4}
          direction="column"
          justify="space-between"
          textAlign={{ base: "center", md: "none" }}
        >
          <Heading textAlign={{ base: "center", md: "none" }}>{title}</Heading>
          <Text marginTop={10}>{description}</Text>
          <Text marginTop={10}>
            <em>{note}</em>
          </Text>

          <br />
          <Flex
            flex={1}
            align="flex-end"
            justify={{ base: "center", md: "none" }}
          >
            <Link href={live} passHref>
              <Button width={128}>See Live</Button>
            </Link>
            <Link href={git} passHref>
              <Button
                marginLeft={12}
                width={128}
                colorScheme="messenger"
                variant="sourceCode"
              >
                Source Code
              </Button>
            </Link>
          </Flex>
        </Flex>
        <Flex flex={0.6} marginLeft={12}>
          <Link href={live} passHref>
            <Image
              display={{ base: "none", md: "flex" }}
              cursor="pointer"
              src={image}
              alt="Pazzi App"
              width="100%"
              height="100%"
              borderRadius={12}
            />
          </Link>
        </Flex>
      </Flex>
    </Stack>
  );
}
