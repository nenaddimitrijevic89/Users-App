import React from "react";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import Users from "../../components/Users.tsx/Users";

const UsersPage = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>City</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Users />
      </Tbody>
    </Table>
  );
};

export default UsersPage;