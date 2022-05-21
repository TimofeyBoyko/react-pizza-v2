import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { globalColors } from "@utils/index";

import Button, { ButtonProps } from ".";

const defaultProps: ButtonProps = {
  label: "Save",
  type: "base",
  onClick: () => {
    console.log("clicked");
  },
  icon: "",
  badgeText: "",
  scale: false,
  isDisabled: false,
  testId: "button",
  id: "",
  className: "",
  style: {},
};

describe("Button tests", () => {
  it("Render", () => {
    render(<Button {...defaultProps} />);

    expect(screen.getByTestId(/button/i)).toBeTruthy();
  });
});
