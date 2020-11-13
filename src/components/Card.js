import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MatchedDogCard from "./MatchedDogCard";
import logo from "../Assets/fetchr.png";

const ImgStyle = styled.image`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 800%;
  max-height: 50%;
  border-radius: 70%;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const CardStyle = styled.div`
  top: 20%;
  padding: 5%;
`;

export default function Card(props) {
  const [isDogVisible, setisDogVisible] = useState(false);
  const [isDecisionMade, setisDecisionMade] = useState(false);
  const [isLoved, setisLoved] = useState(false);
  const [isMatch, setisMatch] = useState(false);
  const [lastDogMatched, setlastDogMatched] = useState(false);
  const [viewedDogUrl, setviewedDogUrl] = useState([]);

  // let newproperties = { ...props.dataObject };
  // const fullDogObject = { dogUrl: doggos };

  useEffect(() => {
    const rand = Boolean(Math.round(Math.random()));
    setisMatch(rand);
  });

  return (
    <div>
      <CardStyle>
        <div>
          {" "}
          <ImgStyle>
            {" "}
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </ImgStyle>
          {isDogVisible ? (
            <div>
              <ImgStyle>
                <img
                  class="animate__animated animate__bounceIn"
                  src={props.dataObject[0]}
                  alt="dog"
                />
              </ImgStyle>
              <Button
                onClick={() => {
                  setisDogVisible(false);
                  setisDecisionMade(true);
                  setisLoved(true);
                }}
              >
                ❤️
              </Button>
              <Button
                onClick={() => {
                  setisDogVisible(false);
                  setisDecisionMade(true);
                  setisLoved(false);
                }}
              >
                💔
              </Button>
            </div>
          ) : (
            <Button
              onClick={() => {
                setisDogVisible(true);
                setlastDogMatched(false);
                props.dataObject.shift();
              }}
            >
              Next Dog
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
