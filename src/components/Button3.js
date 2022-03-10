import React from "react";
import styled from "styled-components";

const ButtonBox = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  height: 50px;
  font-size: 20px;
  background-color: #228;
  box-sizing: border-box;
  &:hover {
    background-color: #234;
    color: ${(props) => props.bg || "#000"};
  }
`;

const Button3 = ({ children, ...rest }) => {
  return (
    <div>
      <ButtonBox {...rest}>{children}</ButtonBox>
    </div>
  );
};

export default Button3;
