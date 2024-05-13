import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { BASE_URL } from "../App";

const UserCard = ({ user, setUsers }) => {
  const toast = useToast();
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(BASE_URL + "/friends/" + user.id, {
        method: "DELETE",
      });

      const data = res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }

      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      toast({
        title: "Friend removed from Friend List",
        status: "success",
        position: "top-center",
        duration: 2000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: "An error occurred",
        status: "error",
        description: error.message,
        position: "top-center",
        duration: 2000,
        isClosable: true,
      })
    }
  };

  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          <Flex flex={1} gap={4} alignItems={"center"}>
            <Avatar src={user.imgUrl} />
            <Box>
              <Heading size={"sm"}>{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal user={user} setUsers={setUsers} />
            <IconButton
              variant={"ghost"}
              colorScheme="red"
              size="sm"
              aria-label="See menu"
              icon={<BiTrash size={20} />}
              onClick={handleDeleteUser}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{user.description}</Text>
      </CardBody>
    </Card>
  );
};

export default UserCard;
