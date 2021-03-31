import { Button, Center, Container, useColorMode } from "@chakra-ui/react";
import React from "react";
import Login from "../../components/Login/Login";

const LoginPage = () => {
  // const { colorMode, toggleColorMode } = useColorMode()
  /* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */
  return (
    <Container mt={50}>
      {/* <Center> */}
        <Login />
      {/* </Center> */}
    </Container>
  );
};

export default LoginPage;
