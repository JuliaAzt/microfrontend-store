import { render, screen } from "@testing-library/react";
import { Header } from "@/components/header";

describe("Header", () => {
  it("renders logo and action when provided", () => {
    const logo = <div data-testid="logo">Logo</div>;
    const action = <div data-testid="action">Action</div>;
    render(<Header logo={logo} action={action} />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
    expect(screen.getByTestId("action")).toBeInTheDocument();
  });

  it("renders nothing when no logo or action provided", () => {
    render(<Header />);
    expect(screen.queryByTestId("logo")).not.toBeInTheDocument();
    expect(screen.queryByTestId("action")).not.toBeInTheDocument();
  });
});
