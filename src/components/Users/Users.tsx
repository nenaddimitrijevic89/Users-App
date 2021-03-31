import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Td, Tr } from "@chakra-ui/table";
import { Person } from "../../../api/Person";

const Users = () => {
  const [users, setUsers] = useState([] as Person[]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      setUsers(users);
    };
    load();
  }, []);

  return (
    <>
      {users.map((user: Person) => {
        return (
          <Link as={`/users/${user.id}`} href="/users/[user]" key={user.id}>
            <Tr>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.address.city}</Td>
            </Tr>
          </Link>
        );
      })}
    </>
  );
};

export default Users;
