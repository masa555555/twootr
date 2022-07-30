import axios from "axios";
import React, { useRef, useState } from "react";
import styled from "styled-components";

const NewTwootFormStyle = styled.form`
  padding: 2rem 100px 0;

  h2 {
    padding-bottom: 0.8rem;
  }

  button {
    border: none;
    cursor: pointer;
    outline: none;
    font-family: "Permanent Marker", cursive;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    color: #fff;
    background: #711a75;
  }

  textarea {
    font-weight: bold;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 3px solid #333;
  }

  span {
    font-family: "Permanent Marker", cursive;
  }

  & .form-title {
    padding-top: 1rem;
  }

  & .form-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
  }
`;

const getCurrentDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const today = `${year}-${month}-${date}`;
  return today;
};

const NewTwootForm = (props) => {
  const { isUpdate, setIsUpdate } = props;
  const [wordCount, setWordCount] = useState(140);
  const textInputRef = useRef();

  const handleCount = (e) => {
    const length = e.target.value.length;
    if (length > 140) {
      alert("Cannot enter more than 140 words");
      return;
    }
    setWordCount(140 - length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(textInputRef.current.value);
    if (textInputRef.current.value === "") {
      alert("Invalid input");
      return;
    }

    const nowDate = getCurrentDate();
    const newTwoot = {
      author: "props.user",
      content: textInputRef.current.value,
      authorSlug: "props.user",
      dateAdded: nowDate,
    };

    axios
      .post("http://localhost:8080/twoot", { newTwoot })
      .then((res) => {
        console.log(res.data);
        setIsUpdate(!isUpdate);
      })
      .catch((error) => console.log(error));
  };
  return (
    <NewTwootFormStyle onSubmit={handleSubmit} id="newTwootForm">
      <section className="form-title">
        <h2>Compose Twoot</h2>
      </section>
      <section className="new-twoot-form">
        <div className="form-top">
          <textarea
            onChange={handleCount}
            ref={textInputRef}
            type="text"
            placeholder="What are you humming about?"
          />
        </div>
        <div className="form-bottom">
          <button>Twoot</button>
          <span>{wordCount}</span>
        </div>
      </section>
    </NewTwootFormStyle>
  );
};

export default NewTwootForm;
