import React from "react";
import {
  Flex,
  Stack,
  Text,
  Button,
  Heading,
  Box,
  Image,
  Fade,
  ScaleFade,
  Slide,
  SlideFade,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import DarkMode from "../public/night-mode.svg";
import LightMode from "../public/light-mode.svg";
import { useColorMode } from "@chakra-ui/react";
import Project from "../components/Project";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  return (
    <>
      <Stack height="100vh" align="center" padding={4}>
        <Head>
          <title>Facundo Sotomayor</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content="Frontend Developer" />
          <meta itemProp="image" content="./mobilitys.me.png" />
          <meta
            property="og:title"
            content="Facundo Sotomayor - Portfolio"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="Frontend Developer"
            key="ogtitle"
          />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta
            name="twitter:creator"
            content="Facundo Sotomayor"
            key="twhandle"
          />
          <meta
            property="og:url"
            content="https://facundosotomayor.vercel.app/"
            key="ogurl"
          />
          <meta
            property="og:image"
            content="https://facundosotomayor.vercel.app/twittercard.jpg"
            key="ogimage"
          />
          <meta
            property="og:site_name"
            content="Facundo Sotomayor"
            key="ogsitename"
          />
          <meta property="og:title" content="Facundo Sotomayor" key="ogtitle" />
          <meta
            property="og:description"
            content="Frontend Developer - Portfolio"
            key="ogdesc"
          />
          <link rel="icon" href="./arg.png" />
        </Head>
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
            {colorMode === "light" ? (
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
          <motion.div
            animate={{ opacity: [0, 0.25, 0.5, 1] }}
            transition={{ from: 90, duration: 2 }}
          >
            <Text textAlign={{ base: "center", md: "none" }}>
              Hello, I am Facundo Sotomayor.
              <br /> I am a Frontend Developer.
            </Text>
          </motion.div>

          <Link href="#projects" passHref>
            <motion.div
              animate={{ scale: [0.75, 1] }}
              transition={{ duration: 1 }}
            >
              <Button marginTop={20} width={200} h={12}>
                Checkout my Work
              </Button>
            </motion.div>
          </Link>
        </Flex>
      </Stack>
      <Stack minH="100vh" align="center" paddingTop={12} id="projects">
        <Heading textAlign="center">PROJECTS</Heading>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Project
            title="Mobilitys.ME"
            description="First website i've ever designed and developed. I've started coding and 2 months after that i had the chance to work on this and even when this website has not been used since the company died it was a very great challenge."
            live="https://mobilitys-me.vercel.app/"
            git="https://github.com/F-Sotomayor/Mobilitys.ME"
            image="./mobilitys.me.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Project
            title="Pokedex with Chakra UI (MOBILE)"
            description="Started this project for a challenge on twitter. We've been given a desing and we had to replicate it. Thought it was time to  implement Chakra UI since i was learning how to use it at the moment."
            live="https://pokedex-with-chakra.vercel.app/"
            git="https://github.com/F-Sotomayor/Pokedex-with-Chakra"
            image="./pokedex.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
        >
          <Project
            title="React Drum Kit"
            description="Challenge from https://javascript30.com/. Decided to save this one because i had a lot of fun while coding it."
            live="http://drumsjs.surge.sh/"
            git="https://github.com/F-Sotomayor/React-Drums"
            image="./react-kit.png"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Project
            title="Pazzi App"
            description="Small scale ecommerce app for a bread company. You can basically input how many breads of each product you want and make an order. You can also check your current orders to know the state of them."
            live="https://pazzi-app.vercel.app/"
            git="https://github.com/F-Sotomayor/pazzi-app"
            image="./pazzi.png"
            note="Check GitHub repository for username and password"
          />
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Project
            title="Pazzi Admin"
            description="Administration Panel for Pazzi. This way the owners can verify their orders and handle the price of their products."
            live="https://pazzi-admin.vercel.app/"
            git="https://github.com/F-Sotomayor/pazzi-admin"
            image="./pazzi-admin.png"
            note="Check GitHub repository for username and password"
          />
        </motion.div>
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
        </Flex>
        <Flex flex={0.5} direction="column">
          <Flex marginTop={6}>
            <Link
              href="mailto:facundosotomayor95@gmail.com?subject=Interested in your profile!"
              passHref
            >
              <motion.div
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.25 }}
              >
                <Image
                  w={16}
                  h={16}
                  src={`https://icongr.am/material/email.svg?size=128&color=${
                    colorMode === "dark" ? "f2f2f2" : "63b3ed"
                  }`}
                  alt="linkedin"
                  cursor="pointer"
                />
              </motion.div>
            </Link>
            <Link href="https://www.linkedin.com/in/facusotomayor/" passHref>
              <motion.div
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.5 }}
              >
                <Image
                  w={16}
                  h={16}
                  marginLeft={12}
                  src={`https://icongr.am/material/linkedin.svg?size=128&color=${
                    colorMode === "dark" ? "f2f2f2" : "63b3ed"
                  }`}
                  alt="linkedin"
                  cursor="pointer"
                />
              </motion.div>
            </Link>
            <Link
              href="https://github.com/F-Sotomayor?tab=repositories"
              passHref
            >
              <motion.div
                initial={{ opacity: 0, y: -25 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.75 }}
              >
                <Image
                  marginLeft={12}
                  cursor="pointer"
                  w={16}
                  h={16}
                  src={`https://icongr.am/material/github.svg?size=128&color=${
                    colorMode === "dark" ? "f2f2f2" : "63b3ed"
                  }`}
                  alt="github"
                />
              </motion.div>
            </Link>
          </Flex>
          <Flex justify="center" align="center" flex={1}>
            <Link href="#" passHref>
              <Image
                w={16}
                h={16}
                cursor="pointer"
                src={`https://icongr.am/material/chevron-up.svg?size=128&color=${
                  colorMode === "dark" ? "f2f2f2" : "303030"
                }`}
                alt="arrow up"
                _hover={{ transform: "scale(1.25)", transition: "1s" }}
              />
            </Link>
          </Flex>
        </Flex>
        <Flex
          width={{ base: "80vw", md: "50vw" }}
          borderTop="1px solid gray"
          height="100px"
          justify="center"
          align="center"
          color="gray"
          textAlign={{ base: "center", md: "none" }}
        >
          <Image
            w={{ base: 8, md: 4 }}
            h={{ base: 8, md: 4 }}
            marginRight={4}
            src="https://icongr.am/material/copyright.svg?size=128&color=a8a8a8"
            alt="copyright"
          />
          <em>2022 - Website developed by Facundo Sotomayor</em>
        </Flex>
      </Stack>
    </>
  );
}
