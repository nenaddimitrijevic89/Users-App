import React, { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { Person } from "../../../api/Person";
import { validateEmail } from "../../../shared/utilities";
import { ERROR_UPDATE_EMPTY, ERROR_UPDATE_EMAIL, SUCCESS_EDIT, ERROR_UPDATE } from "../../../shared/constants";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { UserService } from "../../../services/userService";

const EditUser = () => {
  const [user, setUser] = useState({} as Person);
  const toast = useToast();
  const router = useRouter();
  const { slug } = router.query;
  const id = slug?.[0];

  const setValues = (data: string, name: string) => {
    setUser({ ...user, [name]: data });
  };

  const submit = (data: Person) => {
    const valid = validateEmail(data.email);

    if (!data.name) {
      toast(ERROR_UPDATE_EMPTY as {});
      return;
    }
    if (!valid) {
      toast(ERROR_UPDATE_EMAIL as {});
      return;
    } else {
      UserService.editUser(user, id).then(response => {
        if(response.status === 200){
            toast(SUCCESS_EDIT as {});
            router.push("/users");
        }else{
            toast(ERROR_UPDATE as {});
          }
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
      <Button marginTop="15px" onClick={() => submit(user)}>
        Save
      </Button>
    </>
  );
};

export default EditUser;
