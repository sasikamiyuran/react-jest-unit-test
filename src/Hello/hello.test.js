import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Hello from "./hello";

describe("Testing on hello component", ()=>{
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });
    
    it("renders with or without a name", () => {
        act(() => {
            render(<Hello />, container);
        });
        expect(container.textContent).toBe("Hey, Baggins");
    
        act(() => {
            render(<Hello name="Bilbo" />, container);
        });
        expect(container.textContent).toBe("Hello, Bilbo Baggins");
    
        act(() => {
            render(<Hello name="Frodo" />, container);
        });
        expect(container.textContent).toBe("Hello, Frodo Baggins");
    });
});