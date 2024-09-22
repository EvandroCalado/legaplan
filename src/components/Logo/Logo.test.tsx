import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";

describe("<Logo />", () => {
  it("should render a logo", () => {
    const { container } = render(<Logo />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
