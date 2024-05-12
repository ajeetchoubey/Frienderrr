import { Button, Stack, Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";

function App() {
  return (
    <Stack minH={"100vh"}>
      <Navbar />
      <Container maxW={"1200px"} my={4}>
        <Text
          fontWeight={"bold"}
          letterSpacing={"1px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text fontSize={"2xl"} fontWeight={700}>Your Friends</Text>
        </Text>
        <UserGrid />
      </Container>
    </Stack>
  );
}

export default App;
