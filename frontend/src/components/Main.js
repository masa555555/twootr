import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import NewTwootForm from "./NewTwootForm";
import TwootsList from "./TwootsList";
import styled from "styled-components";
import BackToTopButton from "./UI/BackToTopButton";

const MainWrapper = styled.div`
  //
`;

const Main = () => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [user, setUser] = useState({
    firstName: "Joe",
    lastName: "Doe",
  });
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <MainWrapper id="pageTop">
        <Nav isFocus={isFocus} setIsFocus={setIsFocus} />
        <Hero user={user} setUser={setUser} />
        <NewTwootForm
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
          user={user}
          setUser={setUser}
          isFocus={isFocus}
          setIsFocus={setIsFocus}
        />
        <TwootsList isUpdate={isUpdate} />
        <BackToTopButton />
      </MainWrapper>
    </>
  );
};

export default Main;
