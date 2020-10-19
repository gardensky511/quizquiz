import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image: url(${BGImage});
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 24px;
    font-weight: 900;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 70px;
    font-weight: 900;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
