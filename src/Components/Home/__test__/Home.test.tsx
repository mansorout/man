import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../Home";

describe("Home Component", () => {
    test("Click on Button Works", ()=>{
        render(<Home/>);
        const button = screen.getByTestId('home-button');
        fireEvent.click(button)
    })
})