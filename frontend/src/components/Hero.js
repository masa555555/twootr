import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const HeroStyle = styled.div`
  min-height: 200px;
  background: #424043;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 90px;
    height: 90px;
  }

  h3 {
    font-weight: bold;
    font-size: 24px;
    display: flex;
    align-items: center;

    & span {
      font-weight: normal;
      font-size: 24px;
      padding: 0 0.5rem;
    }
  }

  span {
    color: #f7e5e0;
    font-size: 14px;
  }

  & .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .userInfo {
    text-align: center;
    min-height: 60px;

    & input {
      width: 80px;
    }
  }

  & .userInfo-form {
    display: flex;
    align-items: center;
    font-size: 24px;
  }
`;

const Hero = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputValue = () => {};
  const handleUpdateUser = () => {
    setIsEditing(false);
  };
  const handleOpenForm = () => {
    setIsEditing(true);
  };

  return (
    <HeroStyle>
      <div className="hero-container">
        <section className="userImage">
          <img
            src="https://avatars.dicebear.com/api/bottts/authorSlug.svg"
            alt=""
          />
        </section>
        <section className="userInfo">
          {isEditing && (
            <div className="userInfo-form">
              <input type="text" onChange={handleInputValue} />
              <input type="text" onChange={handleInputValue} />
              <AiOutlineCheck onClick={handleUpdateUser} />
            </div>
          )}
          {!isEditing && (
            <div className="userInfo-currentUser">
              <h3>
                Joe <span>Doe</span> <BsPencilSquare onClick={handleOpenForm} />
              </h3>
              <span>@joe-doe</span>
            </div>
          )}
        </section>
      </div>
    </HeroStyle>
  );
};

export default Hero;
