// import { describe, it, expect, afterEach } from "jest";
import { fireEvent, render, screen } from "@testing-library/react"
import App from "../src/App";

describe("App Component", () => {

    it("mounting component", async () => {
        expect(screen).toBeTruthy();
    });

    it("increase / decrease button", () => {
        render(<App />);
        const inc = screen.queryByTestId("increment-button");
        const dec = screen.queryByTestId("decrement-button");
        const textCounter = screen.queryByTestId("text");
        const textExpected = "2";

        fireEvent.click(inc)
        fireEvent.click(inc)

        expect(textCounter.textContent).toEqual(textExpected);

        fireEvent.click(dec)
        fireEvent.click(dec)

        expect(textCounter.textContent).toEqual("0");
    })

    it("can't decrement more than 0", () => {
        render(<App />);
        const dec = screen.queryByTestId("decrement-button");
        const textCounter = screen.queryByTestId("text");
        fireEvent.click(dec)
        fireEvent.click(dec)
        expect(textCounter.textContent).toBe("0");
    })
});