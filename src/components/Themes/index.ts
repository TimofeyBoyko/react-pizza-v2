import Base from "./Base";

export interface ITheme {
  background: string;

  text: {
    color: string;
    disabledColor: string;
    background: string;
    fontSize: string;
    fontWeight: string;
    boldFontWeight: string;
    fontStyle: string;
    lineHeight: string;
    userSelect: string;
  };
}

export { Base };
