import { globalColors } from "@utils/index";

import { ITheme } from ".";

const { black, white, gray } = globalColors;

const Base: ITheme = {
  background: white,

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

  iconButton: {
    color: gray,
    hoverColor: black,
  },
};

export default Base;
