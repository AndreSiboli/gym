import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "@/app/components/buttons/Button";

describe("Button Component", () => {
  it("should test if the function will working correctly", () => {
    const mockFunction = jest.fn();
    const { getByRole } = render(
      <Button text="Test" handleClick={mockFunction} />
    );

    const linkButton = getByRole("button");
    fireEvent.click(linkButton);

    expect(mockFunction).toHaveBeenCalledWith();
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it("should test if the compontent will be render with the correct text", () => {
    const { getByText } = render(
      <Button text="Click here" handleClick={() => {}} />
    );

    const linkButton = getByText("Click here");
    expect(linkButton).toBeInTheDocument();
  });

  it("should test if the style will be put correctly", () => {
    const { getByRole } = render(
      <Button
        text="Click here"
        style={{ color: "yellow", padding: "4em" }}
        handleClick={() => {}}
      />
    );

    const linkButton = getByRole("button");
    expect(linkButton).toHaveStyle({ color: "yellow", padding: "4em" });
  });
});
