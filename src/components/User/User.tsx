import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Person } from "../../../api/Person";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/react";
import { successDelete } from "../../../shared/utilities";

const User = () => {
  const [user, setUser] = useState({} as Person);
  const router = useRouter();
  const id = router.query.user;
  const toast = useToast();

  const deleteUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if(response.status === 200){
        toast(successDelete as {});
        router.push("/users");
      }
    })
  }

  useEffect(() => {
    const auth = localStorage.getItem("email");
    if (!auth) {
      router.push("/login");
    }
    const load = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const fetchedUser = await response.json();
      setUser(fetchedUser);
    };
    load();
  }, [id]);

  return (
    <Container maxW="container.xl">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Website</Th>
            <Th>City</Th>
            <Th>Street</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{user?.id}</Td>
            <Td>{user?.name}</Td>
            <Td>{user?.username}</Td>
            <Td>{user?.email}</Td>
            <Td>{user?.phone}</Td>
            <Td>{user?.website}</Td>
            <Td>{user?.address?.city}</Td>
            <Td>{user?.address?.street}</Td>
          </Tr>
        </Tbody>
      </Table>
      <Button margin="15px">Edit</Button>
      <Button margin="15px" onClick={() => deleteUser()}>Delete</Button>
    </Container>
  );
};

export default User;
