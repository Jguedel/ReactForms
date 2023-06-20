import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const lists = [
    {
      task: "you can delete the task by pushing the X ->",
      key: 156,
    },
  ];
  const [items, setItems] = useState(lists);
  const addItem = (task, key) => {
    setItems((items) => [...items, { task, key }]);
  };
  const removeItem = (task, key) => {
    setItems(items.filter((item) => key != item.key));
  };

  return (
    <div className="boxList">
      <h1>Todo List</h1>
      <NewTodoForm addItem={addItem} key={1} />
      {items.map((item) => {
        return (
          <Todo
            key={item.key}
            id={item.key}
            task={item.task}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
