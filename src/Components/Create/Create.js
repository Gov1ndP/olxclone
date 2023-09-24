import React, { Fragment, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useState } from "react";
import { FirebaseContext, AuthContext } from "../store/Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, SetName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const date = new Date();
  const navigate = useNavigate();

  function handleClick() {
    firebase
      .storage()
      .ref(`/image/` + image.name)
      .put(image)
      .then((e) => {
        e.ref.getDownloadURL().then((url) => {
          firebase.firestore().collection("products").add({
            name,
            category,
            price,
            url,
            userId: user.uid,
            createdAt: date.toDateString(),
          });
          navigate("/");
        });
      });
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
            id="fname"
            name="Name"
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="fname"
            name="category"
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="fname"
            name="Price"
          />
          <br />
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>
          <br />
          <input
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
            type="file"
          />
          <br />
          <button onClick={handleClick} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
