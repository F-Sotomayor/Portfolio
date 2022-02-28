import React from "react";
import {
  Flex,
  Stack,
  Text,
  Button,
  Heading,
  Grid,
  Box,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import DarkMode from "../public/night-mode.svg";
import LightMode from "../public/light-mode.svg";
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import Project from "../components/Project";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    setDarkMode(darkMode === true ? false : true);
  }, [toggleColorMode]);

  return (
    <>
      <Stack height="100vh" align="center">
        <Flex justify="flex-end" width="100%">
          <Flex
            justify="center"
            align="center"
            borderRadius="8px"
            h={10}
            w={10}
            _hover={{
              borderColor: "gray",
              border: "0.5px solid",
              transition: "1s",
              cursor: "pointer",
            }}
          >
            {darkMode === false ? (
              <DarkMode
                style={{ fill: "black", width: "32px", height: "32px" }}
                onClick={toggleColorMode}
              />
            ) : (
              <LightMode
                style={{ fill: "white", width: "32px", height: "32px" }}
                onClick={toggleColorMode}
              />
            )}
          </Flex>
        </Flex>
        <Flex
          width="100%"
          direction="column"
          justify="center"
          align="center"
          flex={1}
          fontSize={36}
        >
          <Text display="flex">
            Hello, I am <Text marginLeft="8px"> Facundo Sotomayor.</Text>
          </Text>
          <Text>I am a Frontend Developer.</Text>

          <Button marginTop={20} width={200} h={12}>
            Checkout my Work !
          </Button>
        </Flex>
      </Stack>
      <Stack minH="100vh" align="center">
        <Heading textAlign="center">PROJECTS</Heading>

        <Project
          title="Mobilitys.ME"
          description="First website i've ever designed and developed. I've started coding and 2 months after that i had the chance to work on this and even when this website has not been used since the company died it was a very great challenge."
          live="https://mobilitys-me.vercel.app/"
          git="https://github.com/F-Sotomayor/Mobilitys.ME"
          image="./mobilitys.me.png"
        />

        <Project
          title="Pokedex with Chakra UI (MOBILE)"
          description="Started this project for a challenge on twitter. We've been given a desing and we had to replicate it. Thought it was time to  implement Chakra UI since i was learning how to use it at the moment."
          live="https://pokedex-with-chakra.vercel.app/"
          git="https://github.com/F-Sotomayor/Pokedex-with-Chakra"
          image="./pokedex.png"
        />
        <Project
          title="React Drum Kit"
          description="Challenge from https://javascript30.com/. Decided to save this one because i had a lot of fun while coding it."
          live="http://drumsjs.surge.sh/"
          git="https://github.com/F-Sotomayor/React-Drums"
          image="./react-kit.png"
        />
        <Project
          title="Pazzi App"
          description="Small scale ecommerce app for a bread company. You can basically input how many breads of each product you want and make an order. You can also check your current orders to know the state of them."
          live="https://pazzi-app.vercel.app/"
          git="https://github.com/F-Sotomayor/pazzi-app"
          image="./pazzi.png"
          note="Check GitHub repository for username and password"
        />
        <Project
          title="Pazzi Admin"
          description="Administration Panel for Pazzi. This way the owners can verify their orders and handle the price of their products."
          live="https://pazzi-admin.vercel.app/"
          git="https://github.com/F-Sotomayor/pazzi-admin"
          image="./pazzi-admin.png"
          note="Check GitHub repository for username and password"
        />
      </Stack>
      <Stack h="110vh" align="center">
        <Flex
          flex={0.5}
          direction="column"
          align="center"
          marginTop={36}
          justify="space-evenly"
        >
          <Heading>CONTACT</Heading>
          <Box fontSize={18}>Would you like to work with me ?</Box>
          <Button w={200}>Let's Talk!</Button>
        </Flex>
        <Flex flex={0.5} direction="column">
          <Flex justify="center">
            <Image
              w={16}
              h={16}
              cursor="pointer"
              src="https://icongr.am/material/chevron-up.svg?size=128&color=a8a8a8"
              alt="arrow up"
            />
          </Flex>
          <Flex marginTop={6}>
            <Image
              w={16}
              h={16}
              src="https://icongr.am/material/linkedin.svg?size=128&color=a8a8a8"
              alt="linkedin"
            />
            <Image
              w={16}
              h={16}
              marginLeft={12}
              src="https://icongr.am/material/github.svg?size=128&color=a8a8a8"
              alt="github"
            />
          </Flex>
        </Flex>
        <Flex
          width="50vw"
          borderTop="1px solid gray"
          height="100px"
          justify="center"
          align="center"
          color="gray"
        >
          <Image
            w={4}
            h={4}
            marginLeft={12}
            src="https://icongr.am/material/copyright.svg?size=128&color=a8a8a8"
            alt="copyright"
          />
          <em>2022 - Website developed by Facundo Sotomayor</em>
        </Flex>
      </Stack>
    </>
  );
}
