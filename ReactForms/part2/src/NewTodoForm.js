import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const NewTodoForm = (props) => {
  const INITIAL = {
    task: "",
  };
  const [formData, setformData] = useState(INITIAL);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(formData.task, uuid());
    setformData(INITIAL);
  };
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task: </label>
          <input
            className="task"
            name="task"
            type="text"
            placeholder="Enter your task"
            value={formData.task}
            onChange={handleChange}
            required
          />
        </div>
        <button className="subBtn">Add!</button>
      </form>
    </div>
  );
};
export default NewTodoForm;
