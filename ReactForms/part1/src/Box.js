const Box = (props) => {
  return (
    <div
      className="singleBox"
      style={{
        backgroundColor: props.color,
        width: props.width,
        height: props.height,
      }}
    ></div>
  );
};
export default Box;
