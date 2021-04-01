import React, { useState } from "react";
import { FormLabel, FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";
import Router from "next/router";
import { useToast } from "@chakra-ui/react";
import { SUCCESS_LOGIN, SUCCESS, ERROR_LOGIN } from "../../../shared/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const login = (email: string) => {
    const storageEmail = localStorage.getItem("email");
    if (storageEmail === email) {
      toast(SUCCESS_LOGIN as {});
      Router.push("/");
    } else if (storageEmail && storageEmail !== email) {
      toast(ERROR_LOGIN as {});
    } else {
      localStorage.setItem("email", email);
      toast(SUCCESS as {});
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
