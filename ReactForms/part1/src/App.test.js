import { render, fireEvent, userEvent } from "@testing-library/react";
import App from "./App";
import Box from "./Box";
import NewBoxListForm from "./NewBoxListForm";
import BoxList from "./BoxList";

//BoxList render
test("App can render", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

//BoxList render
test("BoxList can render", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

//NewBoxListForm render
test("NewBoxListForm list can render", () => {
  const { asFragment } = render(<NewBoxListForm />);
  expect(asFragment()).toMatchSnapshot();
});

//Box render
test("Box list can render", () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});

//Adding box
test("Adding a box", () => {
  //starting with nothing
  const { container } = render(<BoxList />);
  expect(container.querySelectorAll(".singleBox")).length = 1;

  const wVal = container.querySelector(".width");
  const hVal = container.querySelector(".height");
  const btn = container.querySelector(".subBtn");

  //add one purple
  wVal.value = 20;
  hVal.value = 20;
  fireEvent.click(btn);
  expect(container.querySelectorAll(".singleBox")).length = 2;
  expect(wVal).value = "";
  expect(hVal).value = "";
  expect(container.querySelectorAll(".singleBox")[1]).toHaveStyle(
    `background-color: purple`
  );
  //add one aqua
  wVal.value = 40;
  hVal.value = 20;
  fireEvent.click(btn);
  expect(container.querySelectorAll(".singleBox")).length = 3;
  expect(wVal).value = "";
  expect(hVal).value = "";
  expect(container.querySelectorAll(".singleBox")[2]).toHaveStyle(`width: 40`);
});

//bad input testing
test("should throw errors for bad inputs", () => {
  const { container } = render(<BoxList />);
  const wVal = container.querySelector(".width");
  const hVal = container.querySelector(".height");
  //bad inputs
  expect(() => (wVal = 19)).toThrow("Assignment to constant variable.");
  expect(() => (wVal = 22)).toThrow("Assignment to constant variable.");
  expect(() => (wVal = "test")).toThrow("Assignment to constant variable.");
  expect(() => (hVal = 19)).toThrow("Assignment to constant variable.");
  expect(() => (hVal = 22)).toThrow("Assignment to constant variable.");
  expect(() => (hVal = "test")).toThrow("Assignment to constant variable.");
});
