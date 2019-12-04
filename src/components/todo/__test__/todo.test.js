import React from "react";
//import ReactDOM from "react-dom";
import Todo from "./../todo";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
afterEach(cleanup);
it("renders button correctly", () => {
  const { getByTestId } = render(<Todo label="add"></Todo>);

  expect(getByTestId("add1")).toHaveTextContent("add");
});
