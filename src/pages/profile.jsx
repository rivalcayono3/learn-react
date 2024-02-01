import React from "react";
import { useLogin } from "../hooks/useLogin";

function ProfilePage() {
  const username = useLogin();
  return (
    <div>
      <h1>Profile</h1>
      Username : {username}
    </div>
  );
}

export default ProfilePage;
