import React from 'react';
import styled,{css} from 'styled-components';
import {darken, lighten} from 'polished';

const colorStyles = css`
  ${({ theme, color }) => { //theme이랑 color들어오면 
    const selected = theme.palette[color]; //그거에 따라 selected상수에 색 저장
    return css` //선택한 값의 css를 리턴 
      background: ${selected};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const sizeStyles = css`
  ${props => //props,size값이 large인 것이 true이면 아래의 css코드를 적용 
    props.size === 'large' &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}

  ${props =>
    props.size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}

    ${props =>
      props.size === 'small' &&
      css`
        height: 1.75rem;
        font-size: 0.875rem;
      `}
`;

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
  ${sizeStyles}

  /* 색상 */
  ${colorStyles};

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }
`;

//이 Button을 호출하는 것은 App.js(부모컴포넌트)이고, 그곳에서 넘기는 인자가 들어오는 것이다
//{children}은 부모에서 Button 테그 사이어 넣는 텍스트 값이고 {...rest}값은 테그 속에 넣는 속성 값이다. 
//그렇게 받은 부모값을 StyleButton으로 넘겨서 style 속성 입힌다음에 갑쪽같이 리턴한다! 
//그럼 부모의 Button은 그 받은 값을 감쪽같이 가지고 간다! 
function Button({children,color,size,...rest}){
    return <StyleButton color={color} size={size} {...rest}>{children}</StyleButton>;
}

Button.defaultProps = {
  color: 'blue'
};

export default Button;
