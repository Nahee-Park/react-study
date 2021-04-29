# Styled-components 사용 환경 준비

1. 새로운 프로젝트에 `$ yarn add styled-components` 추가
2. `import styled from 'styled-components';` 를 추가해주기 -> `styled` 객체를 이용할 것이다!

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
//여기서 h1은 테그가 아니라 테그함수이고, 그 테그 안에 아래의 값을 넣는다는 의미를 갖는다 -- 템플릿 리터럴을 사용하면서 그 내부 값을 조회하고 싶을 때
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
```

# Styled-componets 기본 문법

```javascript
const 상수명 = styled.스타일링하고싶은테그`
    넣을 css 효과들
`;
```

# 활용 방법

## 1. 고정 스타일링

1. 버튼에 css를 추가해주는 StyleButton컴포넌트를 만듦.
2. 그 값을 리턴함
3. 이 컴포넌트를 임포트하면 다른 컴포넌트에서도 이 컴포넌트를 사용할 수 있음!

```javascript
//Button.js
//스타일이 적용된 Button 컴포넌트를 어디서든 import해서 사용할 수 있당!
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

styled component에서의 재사용 흐름은

1. 부모컴포넌트에서 자식 컴포넌트를 호출 `<Button>Button</Button>`
2. 자식컵포넌트는 부모가 자신을 호출했으므로 그 호출값을 인자로 받음 -> 첫번째 값은 텍스트 값, 그 외의 값은 `...rest`에 저장
3. 다시 자식컴포넌트는 `StyleButton` 함수를 적용시켜서 부모한테 보냄

## 2. 가변스타일링

> 가변 스타일링에는 props를 사용한다! (여기서 props는 property 느낌이다!)

- 테그 안에 props로 넘긴 값은 props.넘긴값 으로 접근한다
- 여러 줄의 css코드를 조건부로 넘겨줄 때에는 css를 불러와서 사용해야한다.

```javascript
import React from "react";
import styled, { css } from "styled-components";

//div테그를 스타일링해서 Circle컴포넌트에 넣음
//Circle컴포넌트에 color라는 props를 줌
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

props에는 useState로 관리되는 상태값을 넘겨줄 수도 있습니다!

```javascript

```

고정 스타일링

- css 내부에 가변인자가 없음!
- 재사용 가능한 컴포넌트  
  가변 스타일링
- css 내부에 가변인자 props가 있는 경우 - 한줄 /여러 줄
  고정스타일링 / 가변스타일링
