import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import NavigationButton, { NavigationButtonProps } from ".";

const defaultProps: NavigationButtonProps = {
  label: "",
  value: "2",
  isActive: false,
  isDisabled: false,
  onClick: (value) => console.log(value),
  testId: "navigation-button",
  id: "",
  className: "",
  style: {},
};

describe("Navigation button tests", () => {
  it("Render", () => {
    render(<NavigationButton {...defaultProps} />);

    expect(screen.getByTestId(/navigation-button/i)).toBeTruthy();
  });
});
