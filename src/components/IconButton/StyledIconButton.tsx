import styled, { css } from "styled-components";

import { Base, ITheme } from "../Themes";

type StyledIconButtonProps = {
  size: string;
  color?: string;
  isDisabled?: boolean;
  theme: ITheme;
};

const StyledIconButton = styled.div<StyledIconButtonProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};

    cursor: ${(props) => (props.isDisabled ? "normal" : "pointer")};

    path {
      fill: ${(props) =>
        props.color ? props.color : props.theme.iconButton.color};
    }

    :hover {
      path {
        fill: ${(props) =>
          props.color
            ? props.color
            : props.isDisabled
            ? props.theme.iconButton.color
            : props.theme.iconButton.hoverColor};
      }
    }
  }
`;

StyledIconButton.defaultProps = { theme: Base };

export default StyledIconButton;
