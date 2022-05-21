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

  button: {
    color: {
      base: string;
      baseHover: string;
      baseActive: string;
      baseDisabled: string;

      primary: string;
      primaryHover: string;
      primaryActive: string;
      primaryDisabled: string;
    };

    background: {
      base: string;
      baseHover: string;
      baseActive: string;
      baseDisabled: string;

      primary: string;
      primaryHover: string;
      primaryActive: string;
      primaryDisabled: string;
    };

    border: {
      base: string;
      baseHover: string;
      baseActive: string;
      baseDisabled: string;

      primary: string;
      primaryHover: string;
      primaryActive: string;
      primaryDisabled: string;
    };

    badgeColor: {
      base: string;
      baseHover: string;
      baseActive: string;
      baseDisabled: string;

      primary: string;
      primaryHover: string;
      primaryActive: string;
      primaryDisabled: string;
    };

    badgeBackground: {
      base: string;
      baseHover: string;
      baseActive: string;
      baseDisabled: string;

      primary: string;
      primaryHover: string;
      primaryActive: string;
      primaryDisabled: string;
    };

    badgeBorder: {
      base: string;
      baseHover: string;
      baseActive: string;
      baseDisabled: string;

      primary: string;
      primaryHover: string;
      primaryActive: string;
      primaryDisabled: string;
    };

    borderRadius: string;

    padding: string;
  };
}

export { Base };
