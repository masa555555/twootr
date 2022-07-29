import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoFlagSharp } from "react-icons/io5";

const TwootCardStyle = styled.div`
  box-shadow: 0 0 0 #333;
  border: 3px solid #333;
  padding: 1rem;

  img {
    width: 40px;
    height: 40px;
  }

  input {
    width: 100%;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-bottom: 3px solid #333;
    font-weight: bold;
    font-size: 18px;
  }

  & .card-top,
  & .card-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & .userProfile {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .card-input {
    padding-top: 1rem;
  }

  & .card-bottom {
    padding: 1rem 1rem 0;
  }

  & .icons {
    min-width: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TwootCard = () => {
  return (
    <TwootCardStyle>
      <section className="card-top">
        <div className="userProfile">
          <img
            src="https://avatars.dicebear.com/api/bottts/authorSlug.svg"
            alt=""
          />
          <span>Henry David Throeau</span>
        </div>
        <div className="username">
          <span>@henry-david-throeau</span>
        </div>
      </section>
      <section className="card-input">
        <input type="text" placeholder="Enter your twoot" />
      </section>
      <section className="card-bottom">
        <span className="date">Twooted 22 days ago</span>
        <div className="icons">
          <IoFlagSharp />
          <AiOutlineRetweet />
          <AiFillHeart />
        </div>
      </section>
    </TwootCardStyle>
  );
};

export default TwootCard;
