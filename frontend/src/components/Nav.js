import React from "react";
import styled from "styled-components";
import { FaAngleDoubleDown } from "react-icons/fa";

const HeaderStyle = styled.header`
  min-height: 60px;
  background: #711a75;
  color: #fff;

  & .header-container {
    padding: 0 36px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  h3 {
    font-family: "Permanent Marker", cursive;
    line-height: 60px;
  }

  span {
    color: #f7e5e0;
  }

  strong {
    color: #fff;
  }

  & .header-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & svg {
      font-size: 24px;
    }
  }
`;

const Nav = () => {
  return (
    <HeaderStyle>
      <div className="header-container">
        <section className="header-left">
          <h3>TWOOT</h3>
        </section>
        <section className="header-right">
          <span>
            <strong>Write</strong> a new tweet
          </span>
          <label htmlFor="newTwootForm">
            <FaAngleDoubleDown />
          </label>
        </section>
      </div>
    </HeaderStyle>
  );
};

export default Nav;
