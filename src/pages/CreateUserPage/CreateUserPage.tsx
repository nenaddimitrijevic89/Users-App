import React, { useEffect, useState } from "react";
import CreateUser from "../../components/CreateUser/CreateUser";
import { Center, Container } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/spinner";

const CreateUserPage = () => {
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
    <Container maxW="container.sm">
      <CreateUser />
    </Container>
  );
};

export default CreateUserPage;
