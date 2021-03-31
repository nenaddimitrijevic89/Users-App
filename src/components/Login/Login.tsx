import React, { useState } from "react";
import { FormLabel, FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import Router from "next/router";
import { useToast } from "@chakra-ui/react";
import { successLogin, success, errorLogin } from "../../../shared/utilities";

const Login = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const login = (email: string) => {
    const storageEmail = localStorage.getItem("email");
    if (storageEmail === email) {
      toast(successLogin as {});
      Router.push("/");
    } else if (storageEmail && storageEmail !== email) {
      toast(errorLogin as {});
    } else {
      localStorage.setItem("email", email);
      toast(success as {});
      Router.push("/");
    }
  };

  const set = (email: string) => {
    setEmail(email);
  };
  return (
    <FormControl id="email">
      <FormLabel>Email address</FormLabel>
      <Input type="email" onChange={(e) => set(e.target.value)} />
      <Button marginTop="15px" onClick={() => login(email)}>
        Login
      </Button>
    </FormControl>
  );
};

export default Login;
