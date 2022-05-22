import { globalColors } from "@utils/index";

import { ITheme } from ".";

const {
  black,
  white,
  gray,
  grayMain,
  grayMid,
  grayMaxLight,
  graySilver,
  grayVeryDark,
  grayLight,
  grayLightMid,
  grayVeryLight,
  blueHover,
  orangeMain,
  orangeHover,
  orangePressed,
  orangeDisabled,
  silverDark,
  lightCumulus,
} = globalColors;

const Base: ITheme = {
  background: lightCumulus,

  text: {
    color: black,
    disabledColor: gray,
    background: "transparent",
    fontSize: "13px",
    fontWeight: "400",
    boldFontWeight: "700",
    fontStyle: "normal",
    lineHeight: "16px",
    userSelect: "none",
  },

  button: {
    color: {
      base: black,
      baseHover: black,
      baseActive: black,
      baseDisabled: grayMain,

      primary: white,
      primaryHover: white,
      primaryActive: white,
      primaryDisabled: grayMaxLight,
    },

    background: {
      base: white,
      baseHover: white,
      baseActive: grayMaxLight,
      baseDisabled: graySilver,

      primary: orangeMain,
      primaryHover: orangeHover,
      primaryActive: orangePressed,
      primaryDisabled: orangeDisabled,
    },

    border: {
      base: `1px solid ${silverDark}`,
      baseHover: `1px solid ${blueHover}`,
      baseActive: `1px solid ${grayMaxLight}`,
      baseDisabled: `1px solid ${grayMid}`,

      primary: "none",
      primaryHover: "none",
      primaryActive: "none",
      primaryDisabled: "none",
    },

    badgeColor: white,
    badgeBackground: orangeMain,

    borderRadius: "30px",

    padding: "12px 26px",
  },

  iconButton: {
    color: gray,
    hoverColor: black,
  },

  navigationButton: {
    color: {
      default: black,
      hover: black,
      active: white,
      disabled: grayVeryDark,
    },

    backgroundColor: {
      default: grayVeryLight,
      hover: grayMid,
      active: black,
      disabled: gray,
    },
  },

  layout: {
    contentBackground: white,
  },

  header: {
    borderBottom: `1px solid ${grayLightMid}`,

    cart: {
      color: white,
      separatorColor: grayVeryLight,
      background: orangeMain,
    },
  },
};

export default Base;
