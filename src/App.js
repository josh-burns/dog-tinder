import "./App.css";
import Card from "./components/Card";
import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const AppStyle = styled.div`
  min-width: 40rem;
  max-width: 40rem;
  min-height: 80%;
  max-height: 80%;
  top: 50%; /* IMPORTANT */
  left: 50%; /* IMPORTANT */
  position: absolute;
  margin-left: -50%; /* HALF OF THE WIDTH */
  transform: translateY(-50%);
  border-radius: 10px;
  border: 0.2px solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

export default function App() {
  const [dogs, setdogs] = useState([]);

  // TODO: get 10 images and save state of objects

  async function dataFetch() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((res) => {
      const dogImage = res.data.message;
      let arr = [...dogs, dogImage];
      setdogs((dogs) => [...dogs, arr]);
    });
  }

  useLayoutEffect(() => {
    for (let i = 0; i < 100; i++) {
      dataFetch();
    }
  }, []);

  return (
    <AppStyle>
      <Card dataObject={dogs}> This is a Card</Card>
    </AppStyle>
  );
}
