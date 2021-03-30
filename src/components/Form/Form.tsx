import React, { useState } from "react";
import { FormLabel, FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import Router from "next/router";

const Form = () => {
  const [email, setEmail] = useState("");

  const login = (email: string) => {
    const storageEmail = localStorage.getItem("email");
    if (storageEmail === email) {
      console.log("email is correct");
      Router.push("/");
    } else if (storageEmail && storageEmail !== email) {
      console.log("email is not correct");
    } else {
      localStorage.setItem("email", email);
      console.log("email saved in local storage!");
      Router.push("/");
    }
  };

  const set = (email: string) => {
    console.log(email);
    setEmail(email);
  };
  return (
    <FormControl id="email">
      <FormLabel>Email address</FormLabel>
      <Input type="email" onChange={(e) => set(e.target.value)} />
      <Button marginTop="5px" onClick={() => login(email)}>
        Login
      </Button>
    </FormControl>
  );
};

export default Form;
