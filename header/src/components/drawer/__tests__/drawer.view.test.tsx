import { render, screen } from "@testing-library/react";
import { Drawer } from "@/components/drawer";

describe("Drawer", () => {
  it("renders children when open", () => {
    render(
      <Drawer open={true} onOpenDrawer={vi.fn()} onCloseDrawer={vi.fn()}>
        <div data-testid="child">Child</div>
      </Drawer>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("does not show children when closed", () => {
    render(
      <Drawer open={false} onOpenDrawer={vi.fn()} onCloseDrawer={vi.fn()}>
        <div data-testid="child">Child</div>
      </Drawer>,
    );
    expect(screen.getByTestId("child")).not.toBeVisible();
  });
});
