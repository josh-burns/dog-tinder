import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Faker from "faker";

const ImgStyle = styled.image`
  display: flex;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
`;

const character = {
  firstName: Faker.name.firstName(),
};

export default function MatchedDogCard(props) {
  useEffect(() => {
    character.firstName = Faker.name.firstName();
  }, []);

  return (
    <div>
      <h1> its a matcheroo! </h1>
      <br />
      Meet <h1>{character.firstName} </h1>
      <ImgStyle>
        <img
          class="animate__animated animate__bounceIn"
          src={props.url[0]}
          alt=""
        />
      </ImgStyle>
      <br />
      Message {character.firstName}
    </div>
  );
}
