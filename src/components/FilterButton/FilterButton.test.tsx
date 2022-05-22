import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import FilterButton, { FilterButtonProps } from ".";

const defaultProps: FilterButtonProps = {
  label: "",
  value: "2",
  isActive: false,
  isDisabled: false,
  onClick: (value) => console.log(value),
  testId: "filter-button",
  id: "",
  className: "",
  style: {},
};

describe("filter button tests", () => {
  it("Render", () => {
    render(<FilterButton {...defaultProps} />);

    expect(screen.getByTestId(/filter-button/i)).toBeTruthy();
  });
});
