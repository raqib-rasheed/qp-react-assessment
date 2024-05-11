import React from "react";
import { List, ListRowProps } from "react-virtualized";
import { Todo } from "../../models/Todo.model";
import { TodoItem } from "../todo-item";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const rowRenderer = ({ index, key, style }: ListRowProps) => {
    const todo = todos[index];
    return <TodoItem key={key} style={style} todo={todo} />;
  };

  return (
    <List
      rowHeight={20}
      height={400}
      width={600}
      rowCount={todos.length}
      rowRenderer={rowRenderer}
    />
  );
};

export default TodoList;
