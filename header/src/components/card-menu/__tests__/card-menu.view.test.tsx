import { render, screen } from "@testing-library/react";
import { CardMenu } from "@/components/card-menu";

describe("CardMenu", () => {
  it("renders the title", () => {
    render(
      <CardMenu thumbnail="thumbnail.png" title="Test Title" price={10} />,
    );
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the price", () => {
    render(
      <CardMenu thumbnail="thumbnail.png" title="Test Title" price={10} />,
    );
    const priceElement = screen.getByText(/10/i);
    expect(priceElement).toBeInTheDocument();
  });

  it("renders the thumbnail", () => {
    render(
      <CardMenu thumbnail="thumbnail.png" title="Test Title" price={10} />,
    );
    const thumbnailElement = screen.getByAltText(/Test Title/i);
    expect(thumbnailElement).toBeInTheDocument();
  });
});
