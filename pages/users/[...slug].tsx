import React from "react";
import UserPage from "../../src/pages/UserPage/UserPage";
import { useRouter } from "next/router";
import EditUserPage from "../../src/pages/EditUserPage/EditUserPage";

const UserContainer: React.FC = () => {
  const router = useRouter();
  const { slug } = router.query;
  if(slug?.[1] === "edit"){
    return <EditUserPage />
  }
  return <UserPage />;
};

export default UserContainer;
