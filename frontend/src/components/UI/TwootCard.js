import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoFlagSharp } from "react-icons/io5";

const TwootCardStyle = styled.li`
  box-shadow: 0 0 0 #333;
  border: 3px solid #333;
  padding: 1rem;
  margin-bottom: 1rem;

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
    padding: 0 1rem;
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

  & .card-content {
    padding: 1.5rem 0 0.5rem 1rem;
    font-weight: bold;
    border-bottom: 3px solid #333;
  }

  & .card-bottom {
    padding-top: 1rem;
  }

  & .icons {
    min-width: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TwootCard = (props) => {
  const {
    key,
    id,
    author,
    authorSlug,
    content,
    dateAdded,
    dateModified,
    length,
    tags,
  } = props;

  return (
    <TwootCardStyle>
      <section className="card-top">
        <div className="userProfile">
          <img
            src={`https://avatars.dicebear.com/api/bottts/${authorSlug}.svg`}
            alt=""
          />
          <span>{author}</span>
        </div>
        <div className="username">
          <span>@{author}</span>
        </div>
      </section>
      <section className="card-content">
        <p className="">{content}</p>
        {/* <input type="text" placeholder={content} /> */}
      </section>
      <section className="card-bottom">
        <span className="date">Twooted {length} days ago</span>
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
