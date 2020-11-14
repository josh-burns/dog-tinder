import React from "react";
import styled from "styled-components";
import App from "../App";

const BannerStyle = styled.div`
  background: rgb(255, 145, 145);
  background: linear-gradient(
    90deg,
    rgba(255, 145, 145, 0.9948179955575981) 0%,
    rgba(145, 237, 255, 1) 100%
  );
  height: 100vh;
`;
export default function Banner() {
  return (
    <BannerStyle>
      <App />
    </BannerStyle>
  );
}
