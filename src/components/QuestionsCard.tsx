import React from "react";

// Types
import { AnswerObject } from "../App";

// Styles
import { Wrapper, ButtonWrapper } from "./QuestionsCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestion: number;
};

// React.FC : 리액트의 함수형 컴포넌트 (Functional Component)
// 함수가 받는 props의 타입은 <>안에 쓴다
const QuestionsCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestion,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNumber} / {totalQuestion}
    </p>
    {/* dangerouslySetInnerHTML: DOM에서 innerHTML을 사용하기 위한 React의 대체 방법 */}
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <ButtonWrapper
          key={answer}
          isCorrect={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);

export default QuestionsCard;
