import React from "react";
import TodoListItem from "./TodoListItem";

// TodoListTemplate props -> todos
const TodoListBox = ({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) => {
  console.log(todos)
  return (
    <ul className="todolist__box">
      {todos.map(todo => 
        <TodoListItem 
          todo={todo} 
          key={todo.id} 
          onToggle={onToggle}
          onRemove={onRemove}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
        />
      )}
    </ul>
  );
}
export default TodoListBox;