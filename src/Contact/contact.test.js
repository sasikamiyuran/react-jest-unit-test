import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Contact from "./contact";

describe("Mock component testing on contact-component", ()=>{
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
    
    it("should render contact information", () => {
        const center = { lat: 0, long: 0 };
        act(() => {
            render(
                <Contact
                    name="Frodo Baggins"
                    email="frodo@loadoftherings.com"
                    site="http://loadOfTheRings.com"
                    center={center}
                />,
                container
            );
        });
    
        expect(
            container.querySelector("[data-testid='email']").getAttribute("href")
        ).toEqual("mailto:frodo@loadoftherings.com");
    
        expect(
            container.querySelector('[data-testid="site"]').getAttribute("href")
        ).toEqual("http://loadOfTheRings.com");
    });
});