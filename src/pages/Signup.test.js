import { render } from '@testing-library/react'
import React from 'react'
import Signup from "./Signup"
import App from "../App"


describe("Signup page test", () => {

    describe("Layout", () => {

        test("has email input",  () => {
            render(<App/>)
            // const text = screen.getByText('Sign-in')
        //     expect(text).toBeInTheDocument();
        // //     const logo = screen.getByRole("img")
        // //     expect(logo).toHaveAttribute('alt', 'logo')
        })
    })
})