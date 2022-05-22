import styled, { css } from "styled-components";

import { Base, ITheme } from "../Themes";

type StyledSelectionButtonProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  theme: ITheme;
};

const activeCss = css`
  background: ${(props) => props.theme.selectionButton.background.active};
  box-shadow: ${(props) => props.theme.selectionButton.boxShadow};
`;

const StyledSelectionButton = styled.div<StyledSelectionButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 46px;

  box-sizing: border-box;

  border-radius: 5px;

  background: ${(props) => props.theme.selectionButton.background.default};

  .selection-button_text {
    color: ${(props) =>
      props.isDisabled
        ? props.theme.selectionButton.color.disabled
        : props.theme.selectionButton.color.default};
  }

  ${(props) => props.isActive && !props.isDisabled && activeCss}
`;

StyledSelectionButton.defaultProps = { theme: Base };

export default StyledSelectionButton;
