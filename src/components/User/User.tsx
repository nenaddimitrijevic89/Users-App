import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Person } from "../../../api/Person";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useToast } from "@chakra-ui/react";
import { SUCCESS_DELETE } from "../../../shared/constants";
import { UserService } from "../../../services/userService";

const User = () => {
  const [user, setUser] = useState({} as Person);
  const router = useRouter();
  const { slug } = router.query;
  const id = slug?.[0];
  const toast = useToast();

  const deleteUser = () => {
    UserService.deleteUser(id)
    .then(response => {
      if(response.status === 200){
        toast(SUCCESS_DELETE as {});
        router.push("/users");
      }
    })
  }

  useEffect(() => {
    if(!id)return;
    
    const load = async () => {
      const response = await UserService.getUser(id);
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
      <Button margin="15px" onClick={() => router.push(`/users/${id}/edit`)}>Edit</Button>
      <Button margin="15px" onClick={() => deleteUser()}>Delete</Button>
    </Container>
  );
};

export default User;
