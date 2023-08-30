import React from "react";
import { ITodoItem } from "../types/types";
import { toggleCheckBox } from "../styles/styles";

type TProps = {
  onToggle: (id: number) => void;
  item: ITodoItem;
};

const TodoToggleCheckBox = ({ onToggle, item }: TProps) => {
  const changeIsDone = () => {
    onToggle(item.id);
  };

  return (
    <input
      type="checkbox"
      style={toggleCheckBox}
      checked={item.isDone}
      onChange={changeIsDone}
    />
  );
};

export default TodoToggleCheckBox;
