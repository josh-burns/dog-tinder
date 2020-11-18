import "./App.css";
import Card from "./components/Card";
import React, { useState, useLayoutEffect } from "react";
import axios from "axios";

import styled from "styled-components";

const AppStyle = styled.div`
  min-width: 10rem;
  /* max-width: 40rem; */
  height: 100%;
  display: block;
  font-size: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 450px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  background: white;
  border-radius: 30px;
`;

export default function App() {
  const [dogs, setdogs] = useState([]);
  // eslint-disable-next-line

  async function dataFetch() {
    await axios.get(`https://dog.ceo/api/breeds/image/random`).then((res) => {
      const dogImage = res.data.message;
      let arr = [...dogs, dogImage];
      setdogs((dogs) => [...dogs, arr]);
    });
  }

  useLayoutEffect(() => {
    for (let i = 0; i < 100; i++) {
      dataFetch();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <AppStyle>
      <Card dataObject={dogs}> This is a Card</Card>
    </AppStyle>
  );
}
