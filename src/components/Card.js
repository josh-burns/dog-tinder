import React, { useState } from "react";
import styled from "styled-components";

const ImgStyle = styled.image`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Card(props) {
  const [isGoodBoy, setGoodBoy] = useState("not a good boy");
  const [isDogVisible, setisDogVisible] = useState(false);
  const [isDecisionMade, setisDecisionMade] = useState(false);

  return (
    <div>
      <br />
      <br />
      <br />

      {isDogVisible ? (
        <div>
          {" "}
          <ImgStyle>
            <img src={props.dataObject[0]} alt="dog" />
          </ImgStyle>
          <ButtonStyle>
            <button
              onClick={() => {
                setGoodBoy("definitely a good boi");
                setisDogVisible(false);
                setisDecisionMade(true);
              }}
            >
              ❤️
            </button>

            <button
              onClick={() => {
                setGoodBoy(" not a good boi...");
                setisDogVisible(false);
                setisDecisionMade(true);
              }}
            >
              💔
            </button>
          </ButtonStyle>
        </div>
      ) : null}

      {isDogVisible ? null : (
        <ButtonStyle>
          <button
            onClick={() => {
              setisDogVisible(true);
            }}
          >
            Show Dog
          </button>
        </ButtonStyle>
      )}

      <br />
      <br />
      <br />
      <br />
      {isDecisionMade ? (
        <div>
          {" "}
          {props.dataObject.shift()}
          <h1> {isGoodBoy}</h1> {setisDecisionMade(false)}
        </div>
      ) : null}
    </div>
  );
}

// ReactDOM.render(<Card />, document.getElementById("root"));
