import React, { useEffect, useState } from "react";
import EditUser from "../../components/EditUser/EditUser";
import { Center, Container } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { Spinner } from "@chakra-ui/spinner";

const EditUserPage = () => {
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
      <EditUser />
    </Container>
  );
};

export default EditUserPage;
