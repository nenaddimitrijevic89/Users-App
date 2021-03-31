import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Person } from "../../../api/Person";
import { error, errorEmail, success, validateEmail } from "../../../shared/utilities";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";

const CreateUser = () => {
  const [user, setUser] = useState({} as Person);
  const toast = useToast();
  const router = useRouter();

  const setValues = (data: string, name: string) => {
    setUser({ ...user, [name]: data });
  };

  const submit = (data: Person) => {
    const valid = validateEmail(data.email);

    if (!data.name) {
      toast(error as {});
      return;
    }
    if (!valid) {
      toast(errorEmail as {});
      return;
    } else {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(data),
      }).then(() => {
        toast(success as {});
        router.push("/users");
      });
    }
  };
  
  return (
    <>
      <FormControl id="name" mt={50}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          onChange={(e) => setValues(e.target.value, "name")}
          required
        />
      </FormControl>
      <FormControl id="email" marginTop="15px">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          name="email"
          onChange={(e) => setValues(e.target.value, "email")}
          required
        />
      </FormControl>
      <Button marginTop="15px" onClick={() => submit(user)}>Create</Button>
    </>
  );
};

export default CreateUser;
