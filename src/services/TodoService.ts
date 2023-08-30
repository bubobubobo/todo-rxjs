import { BehaviorSubject, Observable } from "rxjs";
import { ITodoItem } from "../types/types";

class TodoServiceController {
  TodoList: ITodoItem[] = [
    { id: 1, content: "Learn React", isDone: false },
    { id: 2, content: "Learn Reactive", isDone: true },
  ];

  private _data$: BehaviorSubject<ITodoItem[]> = new BehaviorSubject<
    ITodoItem[]
  >(this.TodoList);

  readonly todoData$: Observable<ITodoItem[]> = this._data$.asObservable(); // 직접 접근 제한

  get nextId() {
    return Math.max(...this.TodoList.map((todo) => todo.id), 0) + 1;
  }

  addTodo(content: string) {
    this.TodoList = [
      ...this.TodoList,
      { content, id: this.nextId, isDone: false },
    ];
    this._data$.next(this.TodoList);
  }

  deleteTodo(id: number) {
    this.TodoList = this.TodoList.filter((todo) => todo.id !== id);
    this._data$.next(this.TodoList);
  }

  toggleIsDone(id: number) {
    this.TodoList = this.TodoList.map((todo) => ({
      ...todo,
      isDone: todo.id === id ? !todo.isDone : todo.isDone,
    }));
    this._data$.next(this.TodoList);
  }

  dispose() {
    this._data$.complete();
  }
}

export const TodoService = new TodoServiceController();
