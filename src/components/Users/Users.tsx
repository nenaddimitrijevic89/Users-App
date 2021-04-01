import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Td, Tr } from "@chakra-ui/table";
import { Person } from "../../../api/Person";
import { UserService } from "../../../services/userService";

const Users = () => {
  const [users, setUsers] = useState([] as Person[]);

  useEffect(() => {
    const load = async () => {
      const response = await UserService.getUsers();
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
            <Tr cursor="pointer" _hover={{ background: '#50e3c2' }}>
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
