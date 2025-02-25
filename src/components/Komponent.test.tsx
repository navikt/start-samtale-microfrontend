import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import Komponent from "./Komponent";

describe("Microfrontend", () => {
  it("should have a headline", () => {
    render(<Komponent />);
    expect(screen.getByText("Du kan få veiledning")).toBeDefined();
  });

  it("should have a description", () => {
    render(<Komponent />);
    expect(screen.getByText("Vi ønsker å bli bedre kjent med deg og situasjonen din, slik at du kan få veiledning som passer for deg.")).toBeDefined();
  });
});
