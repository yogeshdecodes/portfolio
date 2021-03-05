import React from "react";
import { render, screen } from "../../../test-utils";
import Footer from "./footer";

describe("Footer tests", () => {
  it("Should show a copyright", () => {
    render(<Footer darkMode onDarkModeToggle={() => {}} />);

    expect(screen.queryByText(/© Yogesh Yadav/i)).toBeTruthy();
  });
});
