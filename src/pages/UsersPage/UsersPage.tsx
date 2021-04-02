import React, { useEffect, useState } from "react";
import { Table, Tbody, Th, Thead, Tr } from "@chakra-ui/table";
import Users from "../../components/Users/Users";
import { useRouter } from "next/router";
import { Center, Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Spinner } from "@chakra-ui/react";

const UsersPage = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("email");
    if (!auth) {
      router.push("/login");
    } else {
      setLoader(false);
    }
  }, []);

  return loader ? (
    <Center>
      <Spinner size="xl" marginTop="50px" />
    </Center>
  ) : (
    <Container maxW="container.lg">
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
      <Button marginTop="15px" onClick={() => router.push("/createuser")}>
        Create new user
      </Button>
    </Container>
  );
};

export default UsersPage;
