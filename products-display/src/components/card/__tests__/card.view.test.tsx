import { render, fireEvent, screen } from "@testing-library/react";
import { Card } from "@/components/card";

describe("Card", () => {
    const propsCard = {
        title: "Test Title",
        description: "Test Description",
        price: "10.99",
        thumbnail: "https://example.com/image.jpg",
        onClick: () => { },
    }
    it("should render the title", () => {
        const title = "Test Title";
        render(<Card {...propsCard} title={title} />);
        expect(screen.getByText(title)).toBeInTheDocument();
    });

    it("should render the description", () => {
        const description = "Test Description";
        render(<Card  {...propsCard} description={description} />);
        expect(screen.getByText(description)).toBeInTheDocument();
    });

    it("should render the price", () => {
        const price = "10.99";
        render(<Card  {...propsCard} price={price} />);
        expect(screen.getByText(price)).toBeInTheDocument();
    });

    it("should render the thumbnail", () => {
        const thumbnail = "https://example.com/image.jpg";
        const title = "Test Title";
        render(<Card  {...propsCard} thumbnail={thumbnail} />);
        expect(screen.getByAltText(title)).toBeInTheDocument();
    });

    it("should call the onClick function when the button is clicked", () => {
        const onClick = vi.fn();
        render(<Card  {...propsCard} onClick={onClick} />);
        fireEvent.click(screen.getByText("Comprar"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});