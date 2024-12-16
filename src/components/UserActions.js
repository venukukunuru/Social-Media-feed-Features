import React from "react";
import { Avatar, Button, IconButton } from "@mui/material";
import { Logout } from "@mui/icons-material";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./UserActions.css";

const UserActions = ({ user }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="user-actions">
      <div className="app-bar">
        <IconButton onClick={() => navigate("/profile")} color="primary">
          <Avatar alt={user.displayName} src={user.photoURL} />
        </IconButton>
        <Button
          variant="outlined"
          startIcon={<Logout />}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserActions;
