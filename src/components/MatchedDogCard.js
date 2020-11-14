import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Faker from "faker";
import { TwitterShareButton } from "react-twitter-embed";

const ImgStyle = styled.image`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
  max-height: 20%;
  border-radius: 70%;
  margin-left: auto;
  margin-right: auto;
`;

const MatchedDogCardStyle = styled.div`
  text-align: center;
  border-radius: 30px;
  height: 30%;
  max-height: 400px;
  display: block;
  padding-bottom: 5%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

const character = {
  firstName: Faker.name.firstName(),
};

export default function MatchedDogCard(props) {
  const [DogInfo, setDogInfo] = useState({ dogName: "", dogUrl: "" });

  useEffect(() => {
    character.firstName = Faker.name.firstName();
    setDogInfo({ dogName: character.firstName, dogUrl: props.url[0] });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="animate__animated animate__slideInUp animate__faster">
      <MatchedDogCardStyle>
        <h1> its a match! </h1>
        Meet... <h1 className="inline">{character.firstName} </h1>
        <ImgStyle>
          <img className="inline" src={props.url[0]} alt="" />
        </ImgStyle>
        <br />
        <TwitterShareButton
          url={DogInfo.dogUrl[0] || "url"}
          options={{
            text: `I matched with ${DogInfo.dogName} on Fetchr!!`,
            via: "josh_burns_tech",
            size: "large",
          }}
        ></TwitterShareButton>
      </MatchedDogCardStyle>
    </div>
  );
}
