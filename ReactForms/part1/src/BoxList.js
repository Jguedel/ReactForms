import React, { useState } from "react";
import Box from "./Box";
import NewBoxListForm from "./NewBoxListForm";
import "./BoxList.css";

const BoxList = () => {
  const lists = [{}];
  const [items, setItems] = useState(lists);
  const addBox = (width, height, color, id) => {
    setItems((items) => [...items, { width, height, color, id }]);
  };

  return (
    <div className="boxList">
      <NewBoxListForm addBox={addBox} key={1} />
      <div className="boxContainer">
        {items.map((box) => {
          return (
            <Box
              key={box.id}
              width={`${box.width}px`}
              height={`${box.height}px`}
              color={box.color}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BoxList;
