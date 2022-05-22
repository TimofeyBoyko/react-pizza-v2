import styled, { css } from "styled-components";

import { Base, ITheme } from "../Themes";

type StyledFilterButtonProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  theme: ITheme;
};

const activeButton = css`
  background-color: ${(props) =>
    props.theme.filterButton.backgroundColor.active};

  cursor: unset;

  .filter-button_text {
    color: ${(props) => props.theme.filterButton.color.active};
  }
`;

const disabledButton = css`
  background-color: ${(props) =>
    props.theme.filterButton.backgroundColor.disabled} !important;

  cursor: not-allowed;

  .filter-button_text {
    color: ${(props) => props.theme.filterButton.color.disabled} !important;
  }
`;

const StyledFilterButton = styled.div<StyledFilterButtonProps>`
  width: fit-content;
  height: 46px;

  box-sizing: border-box;

  padding: 12px 24px;

  border-radius: 30px;

  margin-right: 8px;

  cursor: pointer;

  background-color: ${(props) =>
    props.theme.filterButton.backgroundColor.default};

  .filter-button_text {
    color: ${(props) => props.theme.filterButton.color.default};
  }

  :hover {
    background-color: ${(props) =>
      !props.isActive && props.theme.filterButton.backgroundColor.hover};

    .filter-button_text {
      color: ${(props) =>
        !props.isActive && props.theme.filterButton.color.hover};
    }
  }

  ${(props) => props.isActive && activeButton}

  ${(props) => props.isDisabled && disabledButton}
`;

StyledFilterButton.defaultProps = { theme: Base };

export default StyledFilterButton;
