import { Button, Stack, Container, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";
import { useState } from "react";

export const BASE_URL = "http://127.0.0.1:5000/api";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers} />
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
        <UserGrid users={users} setUsers={setUsers} />
      </Container>
    </Stack>
  );
}

export default App;
