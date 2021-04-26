import React from 'react';
import styled from 'styled-components';

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

  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;

  /*&는 상위 선택자를 의미한다*/
  /* 색상 */
  background: #228be6;
  &:hover { 
    background: #339af0;
  }
  &:active { /*active는 사용자가 활성화한 상태를 의미한다*/
    background: #1c7ed6;
  }

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

//이 Button을 호출하는 것은 App.js(부모컴포넌트)이고, 그곳에서 넘기는 인자가 들어오는 것이다
//{children}은 부모에서 Button 테그 사이어 넣는 텍스트 값이고 {...rest}값은 테그 속에 넣는 속성 값이다. 
//그렇게 받은 부모값을 StyleButton으로 넘겨서 style 속성 입힌다음에 갑쪽같이 리턴한다! 
//그럼 부모의 Button은 그 받은 값을 감쪽같이 가지고 간다! 
function Button({children, ...rest}){
    console.log({children});
    console.log({...rest});
    return <StyleButton{...rest}>{children}</StyleButton>;
}

export default Button;
