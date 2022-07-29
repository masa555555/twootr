import React, { useEffect, useState } from "react";
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
    id,
    author,
    authorSlug,
    content,
    dateAdded,
    dateModified,
    length,
    tags,
  } = props;

  const [diffDate, setDiffDate] = useState();

  const checkDateGap = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const today = new Date(year, month, day);
    const dateData = dateModified
      ? dateModified.split("-")
      : dateAdded.split("-");
    const past = new Date(dateData[0], dateData[1], dateData[2]);

    const diffMillSec = past - today;
    const diffDays = parseInt(diffMillSec / 1000 / 60 / 60 / 24);
    setDiffDate(diffDays);
  };

  useEffect(() => {
    checkDateGap();
  }, []);

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
      </section>
      <section className="card-bottom">
        <span className="date">Twooted {diffDate && diffDate} days ago</span>
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
