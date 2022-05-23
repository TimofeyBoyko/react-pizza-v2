import styled from "styled-components";

import { Base, ITheme } from "@components/Themes";

type StyledHeaderProps = {
  theme: ITheme;
};

const StyledHeader = styled.header<StyledHeaderProps>`
  width: 100%;
  height: 100%;

  padding: 0 75px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  border-bottom: ${(props) => props.theme.header.borderBottom};
`;

StyledHeader.defaultProps = { theme: Base };

type StyledInfoProps = {
  theme: ITheme;
};

const StyledInfo = styled.div<StyledInfoProps>`
  height: 48px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  .header_logo {
    height: 100%;

    margin-right: 16px;

    div {
      height: 100%;
      display: flex;
      align-items: center;

      svg {
        cursor: pointer;
      }
    }
  }
`;

StyledInfo.defaultProps = { theme: Base };

type StyledCartProps = {
  theme: ITheme;
};

const StyledCart = styled.div<StyledCartProps>`
  height: 48px;

  padding: 12px 20px;

  box-sizing: border-box;

  background: ${(props) => props.theme.header.cart.background};

  border-radius: 30px;

  display: flex;
  align-items: center;

  cursor: pointer;

  .cart_cost,
  .cart_count {
    color: ${(props) => props.theme.header.cart.color};
  }

  .cart_separator {
    width: 1px;
    height: 100%;

    background: ${(props) => props.theme.header.cart.separatorColor};

    margin: 0 12px;
  }

  .cart_shopping-cart {
    height: 100%;

    margin-right: 8px;

    div {
      height: 100%;

      display: flex;
      align-items: center;

      svg {
        path {
          stroke: "${(props) => props.theme.header.cart.color}";
        }
      }
    }
  }
`;

StyledCart.defaultProps = { theme: Base };

export { StyledHeader, StyledInfo, StyledCart };
