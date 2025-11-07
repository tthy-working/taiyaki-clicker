import React from "react";
import { signInWithGoogle } from "../../services/firebase";

function GoogleLoginButton() {
  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const token = await result.user.getIdToken();

      // Send token to backend to start a session
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

  return (
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
  );
}

export default GoogleLoginButton;
