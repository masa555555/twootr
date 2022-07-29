import React from "react";
import styled from "styled-components";
// import userImgUrl from "https://avatars.dicebear.com/api/bottts/authorSlug.svg";

const HeroStyle = styled.div`
  min-height: 200px;
  background: #424043;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 80px;
    height: 80px;
  }

  h3 {
    font-weight: normal;
  }

  span {
    color: #f7e5e0;
  }

  & .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
            <strong>Joe</strong> Doe
          </h3>
          <span>@joe-doe</span>
        </section>
      </div>
    </HeroStyle>
  );
};

export default Hero;
