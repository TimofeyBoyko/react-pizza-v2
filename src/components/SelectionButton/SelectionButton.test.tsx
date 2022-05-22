import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import SelectionButton, { SelectionButtonProps } from ".";

const defaultProps: SelectionButtonProps = {
  text: "Test",
  value: 1,
  isActive: false,
  onClick: (value: number | string) => {
    console.log(value);
  },
  isDisabled: false,
  id: "",
  className: "",
  style: {},
  testId: "selection-button",
};

describe("Selection button tests", () => {
  it("Render", () => {
    render(<SelectionButton {...defaultProps} />);

    expect(screen.getByTestId(/selection-button/i)).toBeTruthy();
  });
});
