import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

const baseURL = "http://localhost";

describe("Main page", () => {
  it("should check if the link to about page is working", () => {
    const { getByText } = render(<Home />);

    const linkButton = getByText("MORE ABOUT");

    expect(linkButton.parentElement).toBeInTheDocument();
    expect(linkButton.parentElement).toHaveProperty("href", `${baseURL}/about`);
  });

  it("should check if the link to schedule page is working", () => {
    const { getByText } = render(<Home />);

    const linkButton = getByText("SCHEDULE");

    expect(linkButton.parentElement).toBeInTheDocument();
    expect(linkButton.parentElement).toHaveProperty(
      "href",
      `${baseURL}/schedule`
    );
  });
});
