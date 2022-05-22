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

    badgeColor: string;
    badgeBackground: string;

    borderRadius: string;

    padding: string;
  };

  iconButton: {
    color: string;
    hoverColor: string;
  };

  filterButton: {
    color: {
      default: string;
      hover: string;
      active: string;
      disabled: string;
    };
    backgroundColor: {
      default: string;
      hover: string;
      active: string;
      disabled: string;
    };
  };

  layout: {
    contentBackground: string;
  };

  header: {
    borderBottom: string;

    cart: {
      color: string;
      separatorColor: string;
      background: string;
    };
  };
}

export { Base };
