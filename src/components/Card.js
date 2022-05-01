import React, { useState } from "react";
import styled from "styled-components";
import MatchedDogCard from "./MatchedDogCard";
import Logo from "../Assets/fetchr.png";

const ImgStyle = styled.image`
  object-fit: cover;
  max-height: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const LogoStyle = styled.image`
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled.div`
  display: inline-block;
  max-width: 30%;
  align-items: center;
  justify-content: center;
  color: palevioletred;
  border-radius: 25px;
  font-size: 1em;
  color: white;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: #ff9191;
  border: 2px solid palevioletred;
  left: 50%;
  right: 50%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
`;

const CardStyle = styled.div`
  text-align: center;
  top: 20%;
  display: block;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40%;
  width: 90%;
  margin: 0 auto;
`;

export default function Card(props) {
  const rand = Boolean(Math.round(Math.random()));

  const [isDogVisible, setisDogVisible] = useState(false);
  const [isDecisionMade, setisDecisionMade] = useState(false);
  const [isLoved, setisLoved] = useState(false);
  const [isMatch, setisMatch] = useState(rand);
  const [lastDogMatched, setlastDogMatched] = useState(false);
  const [viewedDogUrl, setviewedDogUrl] = useState([]);

  return (
    <div>
      <CardStyle>
        <div>
          <LogoStyle>
            <a href="/">
              <img src={Logo} alt="logo" />
            </a>
          </LogoStyle>
          Find your canine Match on Fetchr! Choose ❤️ or 💔 and if they ❤️
          you... It's a match!
          <br />
          {isDogVisible ? (
            <div>
              <Button
                className="inline"
                onClick={() => {
                  setisDogVisible(false);
                  setisDecisionMade(true);
                  setisLoved(true);
                }}
              >
                <h1>❤️</h1>
              </Button>
              <Button
                className="inline"
                onClick={() => {
                  setisDogVisible(false);
                  setisDecisionMade(true);
                  setisLoved(false);
                }}
              >
                <h1>💔</h1>
              </Button>
              <ImgStyle>
                <img
                  className="animate__animated animate__bounceIn"
                  src={props.dataObject[0]}
                  alt="dog"
                  width="80%"
                  height="80%"
                />
              </ImgStyle>
            </div>
          ) : (
            <Button
              onClick={() => {
                setisDogVisible(true);
                setisMatch(Boolean(Math.round(Math.random())));
                setlastDogMatched(false);
                props.dataObject.shift();
              }}
            >
              <h2>Next Dog </h2>
            </Button>
          )}
          {isDecisionMade ? (
            <div>
              {isMatch ? <div>{setlastDogMatched(true)}</div> : null}
              {setviewedDogUrl([props.dataObject[0], ...viewedDogUrl])}
              {setisDecisionMade(false)}
            </div>
          ) : null}
          <div>
            {lastDogMatched && isLoved ? (
              <div>
                <MatchedDogCard url={viewedDogUrl} />
              </div>
            ) : null}
          </div>
        </div>
      </CardStyle>
    </div>
  );
}
