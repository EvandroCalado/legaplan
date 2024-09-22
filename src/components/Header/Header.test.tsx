import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("<Logo />", () => {
  it("should render a header", () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /bem-vindo/i })
    ).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });
});
