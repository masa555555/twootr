import React from "react";
import styled from "styled-components";

const NewTwootFormStyle = styled.div`
  padding: 2rem 100px 0;

  h2 {
    padding-bottom: 0.5rem;
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
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 3px solid #333;
  }

  span {
    font-family: "Permanent Marker", cursive;
  }

  & .form-top {
    padding-bottom: 1rem;
  }

  & .form-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const NewTwootForm = () => {
  return (
    <NewTwootFormStyle>
      <section className="form-title">
        <h2>Compose Twoot</h2>
      </section>
      <section className="new-twoot-form">
        <div className="form-top">
          <textarea type="text" placeholder="What are you humming about?" />
        </div>
        <div className="form-bottom">
          <button>Twoot</button>
          <span>140</span>
        </div>
      </section>
    </NewTwootFormStyle>
  );
};

export default NewTwootForm;
