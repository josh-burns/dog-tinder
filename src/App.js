import "./App.css";
import Card from "./components/Card";
import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const AppStyle = styled.div`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  /* -ms-transform: translateY(-50%); */
  transform: translateY(-50%);
`;

export default function App() {
  const [dogs, setdogs] = useState([]);

  // TODO: get 10 images and save state of objects

  async function dataFetch() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((res) => {
      const dogImage = res.data.message;
      let arr = [dogImage];
      console.log({ arr });
      setdogs((dogs) => [...dogs, arr]);
    });
  }

  useLayoutEffect(() => {
    for (let i = 0; i < 50; i++) {
      dataFetch();
      console.log({ dogs });
    }
  }, []);

  return (
    <AppStyle>
      <Card dataObject={dogs}> This is a Card</Card>
    </AppStyle>
  );
}
