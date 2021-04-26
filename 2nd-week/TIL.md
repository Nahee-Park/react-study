# Styled-components 사용 환경 준비

1. 새로운 프로젝트에 `$ yarn add styled-components` 추가
2. `import styled from 'styled-components';` 를 추가해주기

# 미리 알아둘 문법

## Tagged Template Literal 문법

```javascript
const red = "빨간색";
const blue = "파란색";
function favoriteColors(texts, ...values) {
  console.log(texts);
  console.log(values);
}
favoriteColors`제가 좋아하는 색은 ${red}과 ${blue}입니다.`;
```

- text는 들어온 문자열을 분해해 문자열을 배열값으로 할당한다
- ...values는 rest연산자로 ${} 내부의 값을 하나씩 받는다 (template literal문법으로
  쓰인 아이들 )

```javascript
//App.js
import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
//Button테그는 여기에 정의되어 있지 않으므로 Button.js에서 들고 온다

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <Button>Button</Button>
    </AppBlock>
  );
}

export default App;
```

```javascript
//Button.js
import React from "react";
import styled from "styled-components";

const StyleButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;
`;

function Button({ children, ...rest }) {
  console.log({ children }); //{children: "Button"}
  console.log({ ...rest }); //{} (빈 객체)
  return <StyleButton {...rest}>{children}</StyleButton>;
}

export default Button;
```

styled component에서의 흐름은

1. 부모컴포넌트에서 자식 컴포넌트를 호출 `<Button>Button</Button>`
2. 자식컵포넌트는 부모가 자신을 호출했으므로 그 호출값을 인자로 받음 -> 첫번째 값은 텍스트 값, 그 외의 값은 `...rest`에 저장
3. 다시 자식컴포넌트는 `StyleButton` 함수를 적용시켜서 부모한테 보냄

# Styled-componets 기본 문법

```javascript
const 상수명 = styled.스타일링하고싶은테그`
    넣을 css 효과들
`;
```

# 활용 방법

- 테그 안에 props로 넘긴 값은 props.넘긴값 으로 접근한다
- 여러 줄의 css코드를 조건부로 넘겨줄 때에는 css를 불러와서 사용해야한다.

```javascript
import React from "react";
import styled, { css } from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${(props) => props.color || "black"};
  border-radius: 50%;
  ${(props) =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;
// 여러 줄의 css코드를 조건 식으로 넘김

function App() {
  return <Circle color="blue" huge />;
}

export default App;
```
