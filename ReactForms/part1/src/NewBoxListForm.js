import React, { useState } from "react";
import { v4 as uuid } from "uuid";
const NewBoxListForm = (props) => {
  const INITIAL = {
    width: "",
    height: "",
    color: "purple",
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
    props.addBox(formData.width, formData.height, formData.color, uuid());
    setformData(INITIAL);
  };
  return (
    <div className="boxForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width:</label>
          <input
            className="width"
            name="width"
            type="number"
            placeholder="width"
            value={formData.width}
            onChange={handleChange}
            min={20}
            max={300}
            required
            step={20}
          />
        </div>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            className="height"
            name="height"
            type="number"
            placeholder="height"
            value={formData.height}
            onChange={handleChange}
            min={20}
            max={300}
            required
            step={20}
          />
        </div>
        <div>
          <label htmlFor="color">Color:</label>
          <select
            className="color"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          >
            <option value="purple" select="true">
              purple
            </option>
            <option value="pink">pink</option>
            <option value="aqua">aqua</option>
            <option value="BurlyWood">BurlyWood</option>
            <option value="FireBrick">FireBrick</option>
            <option value="Gold">Gold</option>
            <option value="DarkOliveGreen">DarkOliveGreen</option>
            <option value="DarkSalmon">DarkSalmon</option>
          </select>
        </div>
        <button className="subBtn">Add!</button>
      </form>
    </div>
  );
};
export default NewBoxListForm;
