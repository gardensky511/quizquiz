import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
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
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestion}
    </p>
    {/* dangerouslySetInnerHTML: DOM에서 innerHTML을 사용하기 위한 React의 대체 방법 */}
    {/* https://ko.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml */}
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionsCard;
