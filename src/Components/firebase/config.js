import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBU-7jR-AbOnkxmtTP1K4mvVIGCyEXtBvk",
  authDomain: "fir-8651d.firebaseapp.com",
  projectId: "fir-8651d",
  storageBucket: "fir-8651d.appspot.com",
  messagingSenderId: "38624488912",
  appId: "1:38624488912:web:f8df0828b948a148e51dd5",
  measurementId: "G-V56LHM4QVG",
};

export default firebase.initializeApp(firebaseConfig);
