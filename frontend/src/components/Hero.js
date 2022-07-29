import React from "react";
import styled from "styled-components";
import { BsPencilSquare } from "react-icons/bs";
// import userImgUrl from "https://avatars.dicebear.com/api/bottts/authorSlug.svg";

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
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    text-align: center;
  }
`;

const Hero = () => {
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
          <h3>
            Joe <span>Doe</span> <BsPencilSquare />
          </h3>
          <span>@joe-doe</span>
        </section>
      </div>
    </HeroStyle>
  );
};

export default Hero;
