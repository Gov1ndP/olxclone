import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Context, { FirebaseContext } from "./Components/store/Context";
import firebase from "./Components/firebase/config";

createRoot(document.getElementById("root")).render(
  <FirebaseContext.Provider value={{ firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
);
