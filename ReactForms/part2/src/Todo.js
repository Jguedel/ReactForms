const Todo = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.removeItem(props.task, props.id);
  };
  return (
    <div className="item">
      <p className="taskText">{props.task}</p>
      <button className="delBtn" onClick={handleClick}>
        X
      </button>
    </div>
  );
};
export default Todo;
