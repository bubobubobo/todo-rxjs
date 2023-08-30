import React from "react";
import { button } from "../styles/styles";

type TProps = {
  onDelete: (id: number) => void;
  todoId: number;
};

const TodoDeleteButton = ({ onDelete, todoId }: TProps) => {
  const deleteTodoItem = () => {
    onDelete(todoId);
  };

  return (
    <button style={button} onClick={deleteTodoItem}>
      삭제
    </button>
  );
};

export default TodoDeleteButton;
