import React from "react";

function UserInfo({ user }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <p>
        Signed in as <strong>{user.displayName}</strong>
      </p>
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="Profile"
          style={{ width: "50px", borderRadius: "50%", marginTop: "5px" }}
        />
      )}
    </div>
  );
}

export default UserInfo;
