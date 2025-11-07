import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle, logout, auth } from "../services/firebase";

function GoogleLoginButton() {
  const [user] = useAuthState(auth);

  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const token = await result.user.getIdToken();

      // Send the token to backend to create a secure session
      await fetch("/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token }),
        credentials: "include",
      });
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      await logout();
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {user ? (
        <>
          <p>Signed in as <strong>{user.displayName}</strong></p>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}

export default GoogleLoginButton;