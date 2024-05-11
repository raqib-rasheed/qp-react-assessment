import React from "react";
import { List } from "react-virtualized";
import { Todo } from "../../models/Todo.model";
import { TodoItem } from "../todo-item";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const rowRenderer = ({ index, key, style }: any) => {
    const todo = todos[index];
    return <TodoItem key={key} todo={todo} style={style} />;
  };

  return (
    <List
      rowHeight={400}
      height={400}
      width={600}
      rowCount={todos.length}
      itemSize={50}
      rowRenderer={rowRenderer}
    />
  );
};

export default TodoList;
