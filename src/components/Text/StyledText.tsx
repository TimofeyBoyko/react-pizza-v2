import styled, { css } from "styled-components";

import { Base, ITheme } from "../Themes";

type StyledTextProps = {
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  lineHeight?: string;
  truncate?: boolean;
  noUserSelect?: boolean;
  isDisabled?: boolean;
  isBold?: boolean;
  theme: ITheme;
};

const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.text.fontSize};
  font-weight: ${(props) =>
    props.fontWeight
      ? props.fontWeight
      : props.isBold
      ? props.theme.text.boldFontWeight
      : props.theme.text.fontWeight};
  font-style: ${(props) =>
    props.fontStyle ? props.fontStyle : props.theme.text.fontStyle};

  line-height: ${(props) =>
    props.lineHeight ? props.lineHeight : props.theme.text.lineHeight};

  color: ${(props) =>
    props.color
      ? props.color
      : props.isDisabled
      ? props.theme.text.disabledColor
      : props.theme.text.color};

  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.text.background};

  ${(props) =>
    props.noUserSelect &&
    css`
      user-select: ${props.theme.text.userSelect};
    `};

  ${(props) =>
    props.truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    `};

  padding: 0;
  margin: 0;
`;

StyledText.defaultProps = { theme: Base };

export default StyledText;
