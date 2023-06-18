import { Stack, Heading, useColorModeValue } from "@chakra-ui/react";
import UserCard from "./UserCard";

export default function About() {
  return (
    <>
      <Heading
        as="h1"
        color={useColorModeValue("cyan.600", "cyan.400")}
        size="xl"
        textAlign="center"
        my={2}
      >
        About Admin
      </Heading>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <UserCard
          picUrl={"/images/ganesh.jpeg"}
          bgUrl={"/images/fullstack.jpeg"}
          name={"Ganesh Patel"}
          email={"ganeshpatel0921@gmail.com"}
          devType={"Full Stack Developer"}
        />
      </Stack>
    </>
  );
}
