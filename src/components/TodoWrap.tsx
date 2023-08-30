import React from "react";
import CSS from "csstype";

type TProps = {
  children: React.ReactNode;
  style: CSS.Properties;
};

const TodoWrap = ({ ...props }: TProps) => {
  return <div style={props.style}>{props.children}</div>;
};

export default TodoWrap;
