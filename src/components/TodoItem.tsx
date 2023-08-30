import React from "react";
import { ITodoItem } from "../types/types";
import { todoContentTitle } from "../styles/styles";

type TProps = {
  item: ITodoItem;
};

const TodoItem = ({ item }: TProps) => {
  return (
    <p
      style={{
        ...todoContentTitle,
        textDecoration: item.isDone ? "line-through" : "none",
      }}
    >
      {item.content}
    </p>
  );
};

export default TodoItem;
