import "./App.css";
import Button1 from "./components/Button1";
import Button2 from "./components/Button2";
import Test from "./Test";
import styled from "styled-components";
import { css } from "styled-components";
import Button3 from "./components/Button3";

const SectionBox = styled.div`
  width: 350px;
  height: 150px;
  background-color: #000;
  border-radius: 10px;
  color: red;
  font-size: ${(props) => props.fontSize};
`;
const Circle = styled.span`
  display: inline-block;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.backColor || "pink"};
  border-radius: 50%;
  ${(props) =>
    props.box &&
    css`
      width: 100px;
      height: 100px;
    `}
`;
function App() {
  const red = "빨간색";
  const blue = "파랑색";

  //rest 파라마터 확인
  function colors(texts, ...values) {
    console.log(texts);
    console.log(values);
  }
  colors`내가 자주 입는 옷의 색깔은 ${red}와 ${blue}입니다.`;
  return (
    <div className="App">
      <Button3 color="red" bg="green">
        {" "}
        호출된 자식 컴포넌트 버튼
      </Button3>
      <Button1 />
      <Button2 />
      <Test />
      <SectionBox fontSize="50px">섹션박스 1</SectionBox>
      <SectionBox fontSize="70px">섹션박스 1</SectionBox>
      <Circle backColor="blue"></Circle>
      <Circle backColor="green"></Circle>
      <Circle backColor="red"></Circle>
      <Circle backColor="yellow"></Circle>
      <Circle box={true}></Circle>
    </div>
  );
}

export default App;

/* 
preprocessor 전처리기

npx i mode-sass

sass   
scss 

1. 변수 만들어서 쓸 수 있다.
2. nesting 중첩
3. @extend .클래스명 
4. 함수 같은 문법
  }
*/
