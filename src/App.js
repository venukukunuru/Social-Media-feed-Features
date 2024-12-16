import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import Login from "./components/Login";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import UserActions from "./components/UserActions";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      })
      .catch((error) => {
        console.error("Error in setting persistence: ", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        {user && <UserActions user={user} />}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/feed"
            element={user ? <Feed /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile user={user} /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={<Navigate to={user ? "/feed" : "/login"} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
