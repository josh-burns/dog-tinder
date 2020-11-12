import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ImgStyle = styled.image`
  display: flex;
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

export default function Card(props) {
  const [isDogVisible, setisDogVisible] = useState(false);
  const [isDecisionMade, setisDecisionMade] = useState(false);
  const [isLoved, setisLoved] = useState(false);
  const [isMatch, setisMatch] = useState(false);
  const [lastDogMatched, setlastDogMatched] = useState(false);

  let doggos = [...props.dataObject];

  // let newproperties = { ...props.dataObject };
  const fullDogObject = { dogUrl: doggos };

  useEffect(() => {
    const rand = Boolean(Math.round(Math.random()));
    setisMatch(rand);
  });

  return (
    <div>
      <br />
      <br />
      <br />
      {isDogVisible ? (
        <div>
          <ImgStyle>
            <img src={fullDogObject.dogUrl[0]} alt="dog" />
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
      ) : null}

      {isDogVisible ? null : (
        <Button
          onClick={() => {
            setisDogVisible(true);
            setlastDogMatched(false);
          }}
        >
          Show Dog
        </Button>
      )}

      <br />
      <br />
      <br />
      <br />

      {isDecisionMade ? (
        <div>
          {props.dataObject.shift()}
          {fullDogObject.dogUrl[0].shift()}
          {setisDecisionMade(false)}({isMatch ? setlastDogMatched(true) : null})
        </div>
      ) : null}

      <div>
        {lastDogMatched && isLoved ? (
          <div>
            <h1> its a match!!</h1>
          </div>
        ) : null}{" "}
      </div>

      <div>
        <br />

        <br />

        <br />

        <br />
      </div>
    </div>
  );
}
