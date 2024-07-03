import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";

describe("Footer", () => {
    it("renders the logo when provided", () => {
        const logo = <img src="/logo.png" alt="Logo" />;
        render(<Footer logo={logo} />);
        expect(screen.getByAltText("Logo")).toBeInTheDocument();
    });

    it("renders the copyright text", () => {
        render(<Footer />);
        expect(
            screen.getByText("© 2024 VR Benefícios - Todos os direitos reservados")
        ).toBeInTheDocument();
    });
});
