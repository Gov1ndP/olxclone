import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import { AuthContext, FirebaseContext } from "./Components/store/Context";
import Post from "./Components/store/PostContext";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Post>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/create" element={<Create></Create>}></Route>
            <Route path="/view" element={<View></View>}></Route>
          </Routes>
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
