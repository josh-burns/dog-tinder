import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import MatchedDogCard from "./MatchedDogCard";
import logo from "../Assets/fetchr.png";

const ImgStyle = styled.image`
  display: flex;
  margin-left: auto;
  max-height: 80%;
  margin-right: auto;
  max-width: 90%;
  max-height: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin: 5%;
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
  padding: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
              <img src={logo} alt="logo" />
            </a>
          </LogoStyle>
          Find your canine Match on Fetchr!
          <br />
          <br />
          Choose ❤️ or 💔 and if they ❤️ you...
          <br />
          <br />
          It's a match!
          <br />
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
