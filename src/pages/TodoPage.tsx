import React, { useEffect, useState } from "react";
import { Subscription } from "rxjs";
import TodoList from "../components/TodoList";
import { TodoService } from "../services/TodoService";
import { ITodoItem } from "../types/types";

const TodoPage = () => {
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  useEffect(() => {
    const todoData$: Subscription = TodoService.todoData$.subscribe(
      (v: ITodoItem[]) => {
        setTodoList(v);
      }
    );
    return () => todoData$.unsubscribe();
  }, []);

  return <TodoList todoList={todoList} />;
};

export default TodoPage;
