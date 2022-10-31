import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../Store/Store";
import Home from "../Home";

describe("Home Component", () => {
    test("Click on Add Button Works", ()=>{
        render(
            <Provider store={store}>
                <Home/>
            </Provider>
        );
        const button = screen.getByTestId('home-button');
        fireEvent.click(button)
    })
    test("Click on Subtract Button Works", ()=>{
        render(
            <Provider store={store}>
                <Home/>
            </Provider>
        )
        const button = screen.getByTestId('subtract-money')
        fireEvent.click(button)
    })
})