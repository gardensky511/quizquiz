import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 18px;
  }
`;

type ButtonWrapperProps = {
  isCorrect: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3 ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ isCorrect, userClicked }) =>
      isCorrect
        ? "#59bc86"
        : !isCorrect && userClicked
        ? "#ff5656"
        : "#6eafb4"};
    border: none;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
`;
