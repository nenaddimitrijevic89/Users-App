export const validateEmail = (email: string) => {
  if (!email) return;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};

export const success = {
  title: "Account created!",
  description: "Congratulations!",
  status: "success",
  duration: 4000,
  isClosable: true,
};

export const successLogin = {
  title: "Email is correct!",
  description: "Welcome!",
  status: "success",
  duration: 4000,
  isClosable: true,
};

export const successDelete = {
  title: "Account deleted!",
  description: "Goodbye!",
  status: "success",
  duration: 4000,
  isClosable: true,
};

export const errorLogin = {
  title: "Email is not correct!",
  description: "Try different email address!",
  status: "error",
  duration: 4000,
  isClosable: true,
};

export const error = {
  title: "Account not created!",
  description: "Both fields must be filled!",
  status: "error",
  duration: 4000,
  isClosable: true,
};

export const errorEmail = {
  title: "Account not created!",
  description: "Email is not valid!",
  status: "error",
  duration: 4000,
  isClosable: true,
};
