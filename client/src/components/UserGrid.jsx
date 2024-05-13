import { Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../App";

const UserGrid = ({ users, setUsers }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(BASE_URL + "/friends");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }

        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [setUsers]);

  console.log(users);

  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={5}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </Grid>

      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}

      {!loading && users.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"xl"} textAlign={"center"}>
            <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              Don't you have any Friend???<br></br>
            </Text>
            No friend Found. <br />
            (click on the add icon to add a friend!)
          </Text>
        </Flex>
      )}
    </>
  );
};

export default UserGrid;
