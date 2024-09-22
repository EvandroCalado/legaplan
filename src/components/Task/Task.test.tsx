import { render, screen } from "@testing-library/react";
import { Task } from "./Task";

describe("<Task />", () => {
  it("should render", () => {
    render(<Task id="1" task="test" />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
