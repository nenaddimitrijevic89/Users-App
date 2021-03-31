import React, { useEffect } from "react";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import Users from "../../components/Users/Users";
import { useRouter } from "next/router";

const UsersPage = () => {
  const router = useRouter();
  useEffect(() => {
    const auth = localStorage.getItem("email");
    if (!auth) {
      router.push("/login");
    }
  }, []);

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
