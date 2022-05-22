import styled, { css } from "styled-components";

import { Base, ITheme } from "../Themes";

type StyledNavigationButtonProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  theme: ITheme;
};

const activeButton = css`
  background-color: ${(props) =>
    props.theme.navigationButton.backgroundColor.active};

  .navigation-button_text {
    color: ${(props) => props.theme.navigationButton.color.active};
  }
`;

const disabledButton = css`
  background-color: ${(props) =>
    props.theme.navigationButton.backgroundColor.disabled} !important;

  cursor: not-allowed;

  .navigation-button_text {
    color: ${(props) => props.theme.navigationButton.color.disabled} !important;
  }
`;

const StyledNavigationButton = styled.div<StyledNavigationButtonProps>`
  width: fit-content;
  height: 46px;

  box-sizing: border-box;

  padding: 12px 24px;

  border-radius: 30px;

  margin-right: 8px;

  cursor: pointer;

  background-color: ${(props) =>
    props.theme.navigationButton.backgroundColor.default};

  .navigation-button_text {
    color: ${(props) => props.theme.navigationButton.color.default};
  }

  :hover {
    background-color: ${(props) =>
      props.theme.navigationButton.backgroundColor.hover};

    .navigation-button_text {
      color: ${(props) => props.theme.navigationButton.color.hover};
    }
  }

  ${(props) => props.isActive && activeButton}

  ${(props) => props.isDisabled && disabledButton}
`;

StyledNavigationButton.defaultProps = { theme: Base };

export default StyledNavigationButton;
