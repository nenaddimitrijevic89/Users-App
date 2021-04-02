import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import User from "../../components/User/User";
import { Center, Spinner } from "@chakra-ui/react";

const UserPage = () => {
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
    <User />
  );
};

export default UserPage;
