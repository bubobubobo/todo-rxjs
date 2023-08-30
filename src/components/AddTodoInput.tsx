import React, { ChangeEvent, FormEvent, useState } from "react";
import { button, inputFormWrap, todoInput } from "../styles/styles";

type TProps = {
  addTodo: (content: string) => void;
};

const AddTodoInput = ({ addTodo }: TProps) => {
  const [content, setContent] = useState("");

  const changeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <>
      <form onSubmit={submit} style={inputFormWrap}>
        <input
          type="text"
          style={todoInput}
          value={content}
          onChange={changeContent}
        />
        <button type="submit" style={button}>
          추가
        </button>
      </form>
      <hr style={{ width: "100%" }} />
    </>
  );
};

export default AddTodoInput;
