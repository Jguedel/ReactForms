import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

test("App renders", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

test("Todo renders", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});

test("TodoList renders", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test("NewTodoForm renders", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

//Adding/Removing item
test("Adding and removing a task", () => {
  //starting with nothing
  const { container } = render(<TodoList />);
  expect(container.querySelectorAll(".item")).length = 1;
  const text = container.querySelector(".task");
  const btn = container.querySelector(".subBtn");

  //add one item
  test.value = "test";
  fireEvent.click(btn);
  expect(container.querySelectorAll(".item")).length = 2;
  expect(text).value = "";
  expect(container.querySelectorAll(".item")[1]).value = "test";

  //add one item
  const delbtn = container.querySelectorAll(".item")[1];
  fireEvent.click(delbtn);
  expect(container.querySelectorAll(".item")).length = 1;
  expect(text).value = "";
});
