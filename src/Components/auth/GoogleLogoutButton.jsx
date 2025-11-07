import React from "react";
import { logout } from "../../services/firebase";

function GoogleLogoutButton() {
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
  );
}

export default GoogleLogoutButton;
