import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";
import GoogleLoginButton from "./GoogleLoginButton";
import GoogleLogoutButton from "./GoogleLogoutButton";
import UserInfo from "./UserInfo";

function AuthPanel() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {user ? (
        <>
          <UserInfo user={user} />
          <GoogleLogoutButton />
        </>
      ) : (
        <GoogleLoginButton />
      )}
    </div>
  );
}

export default AuthPanel;
