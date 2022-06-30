import "./App.css";
import styled from "styled-components";
import { ObjectDetector } from "./index";
import React from "react";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1c2127;
  display: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  top: 150px;
`;

function Image() {
  return (
    <AppContainer>
      <ObjectDetector />
    </AppContainer>
  );
}

export default Image;