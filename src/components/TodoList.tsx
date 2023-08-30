import React from "react";
import { buttonWrap, listWrap, todoContentWrap } from "../styles/styles";
import { TodoService } from "../services/TodoService";
import { ITodoItem } from "../types/types";
import AddTodoInput from "./AddTodoInput";
import TodoWrap from "./TodoWrap";
import TodoItem from "./TodoItem";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoToggleCheckBox from "./TodoToggleCheckBox";

type TProps = {
  todoList: ITodoItem[];
};

const TodoList = ({ todoList }: TProps) => {
  const addTodoItem = (content: string) => TodoService.addTodo(content);
  const toggleIsDone = (id: number) => TodoService.toggleIsDone(id);
  const deleteTodoItem = (id: number) => TodoService.deleteTodo(id);

  return (
    <TodoWrap style={listWrap}>
      <AddTodoInput addTodo={addTodoItem} />
      {todoList.length !== 0 &&
        todoList.map((item: ITodoItem) => (
          <TodoWrap style={todoContentWrap} key={item.id}>
            <TodoItem item={item} />
            <TodoWrap style={buttonWrap}>
              <TodoDeleteButton onDelete={deleteTodoItem} todoId={item.id} />
              <TodoToggleCheckBox onToggle={toggleIsDone} item={item} />
            </TodoWrap>
          </TodoWrap>
        ))}
    </TodoWrap>
  );
};

export default TodoList;
