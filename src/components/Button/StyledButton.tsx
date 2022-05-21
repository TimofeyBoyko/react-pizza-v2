import styled, { css } from "styled-components";

import { Base, ITheme } from "../Themes";

type StyledButtonProps = {
  type: "base" | "primary";
  scale?: boolean;
  isDisabled?: boolean;
  testId?: string;
  theme: ITheme;
};

const primaryButton = css`
  border: ${(props) => props.theme.button.border.primary};
  background: ${(props) => props.theme.button.background.primary};

  .button_text {
    color: ${(props) => props.theme.button.color.primary};
  }

  .button_icon {
    svg {
      path {
        fill: ${(props) => props.theme.button.color.primary} !important;
      }
    }
  }

  cursor: pointer;

  :hover {
    border: ${(props) => props.theme.button.border.primaryHover};
    background: ${(props) => props.theme.button.background.primaryHover};

    .button_text {
      color: ${(props) => props.theme.button.color.primaryHover};
    }
    .button_icon {
      svg {
        path {
          fill: ${(props) => props.theme.button.color.primaryHover} !important;
        }
      }
    }
  }

  :active {
    border: ${(props) => props.theme.button.border.primaryActive};
    background: ${(props) => props.theme.button.background.primaryActive};

    .button_text {
      color: ${(props) => props.theme.button.color.primaryActive};
    }
    .button_icon {
      svg {
        path {
          fill: ${(props) => props.theme.button.color.primaryActive} !important;
        }
      }
    }
  }
`;

const disabledButton = css`
  border: ${(props) => props.theme.button.border.baseDisabled} !important;
  background: ${(props) =>
    props.theme.button.background.baseDisabled} !important;

  .button_text {
    color: ${(props) => props.theme.button.color.baseDisabled} !important ;
  }
  .button_icon {
    svg {
      path {
        fill: ${(props) => props.theme.button.color.baseDisabled} !important;
      }
    }
  }

  cursor: not-allowed;
`;

const disabledPrimaryButton = css`
  border: ${(props) => props.theme.button.border.primaryDisabled} !important;

  background: ${(props) =>
    props.theme.button.background.primaryDisabled} !important;

  .button_text {
    color: ${(props) => props.theme.button.color.primaryDisabled} !important;
  }
  .button_icon {
    svg {
      path {
        fill: ${(props) => props.theme.button.color.primaryDisabled} !important;
      }
    }
  }

  cursor: not-allowed;
`;

const StyledButton = styled.div<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 46px;

  box-sizing: border-box;

  width: ${(props) => (props.scale ? "100%" : "fit-content")};

  border: ${(props) => props.theme.button.border.base};
  background: ${(props) => props.theme.button.background.base};

  .button_text {
    color: ${(props) => props.theme.button.color.base};
  }
  .button_icon {
    height: 17px;
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      path {
        fill: ${(props) => props.theme.button.color.base};
      }
    }
  }

  cursor: pointer;

  :hover {
    border: ${(props) => props.theme.button.border.baseHover};
    background: ${(props) => props.theme.button.background.baseHover};

    .button_text {
      color: ${(props) => props.theme.button.color.baseHover};
    }
    .button_icon {
      svg {
        path {
          fill: ${(props) => props.theme.button.color.baseHover};
        }
      }
    }
  }

  :active {
    border: ${(props) => props.theme.button.border.baseActive};
    background: ${(props) => props.theme.button.background.baseActive};

    .button_text {
      color: ${(props) => props.theme.button.color.baseActive};
    }
    .button_icon {
      svg {
        path {
          fill: ${(props) => props.theme.button.color.baseActive};
        }
      }
    }
  }

  ${(props) => props.isDisabled && disabledButton};

  ${(props) => props.type === "primary" && primaryButton};

  ${(props) =>
    props.type === "primary" && props.isDisabled && disabledPrimaryButton};

  padding: ${(props) => props.theme.button.padding};
  border-radius: ${(props) => props.theme.button.borderRadius};
`;

StyledButton.defaultProps = { theme: Base };

const StyledBadge = styled.div`
  width: fit-content;
  min-width: 23px;
  height: 23px;

  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 500px;

  margin-left: 12px;

  box-sizing: border-box;

  background: ${(props) => props.theme.button.badgeBackground};

  .badge_text {
    color: ${(props) => props.theme.button.badgeColor};
  }
`;

StyledBadge.defaultProps = { theme: Base };

export { StyledButton, StyledBadge };
