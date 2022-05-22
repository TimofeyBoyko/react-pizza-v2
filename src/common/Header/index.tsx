import Text from "@components/Text";
import React from "react";

import { ReactSVG } from "react-svg";

import { StyledHeader, StyledInfo, StyledCart } from "./StyledHeader";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <StyledInfo>
        <ReactSVG className="header_logo" src="/img/logo.svg" alt="Logo" />
        <div className="header__info-text">
          <Text text="REACT PIZZA" fontSize="24px" lineHeight="29px" isBold />
          <Text
            text="Лучшая пицца в интернете!"
            fontSize="14px"
            lineHeight="19px"
            isDisabled
          />
        </div>
      </StyledInfo>
      <StyledCart>
        <Text
          className="cart_cost"
          text="520 ₽"
          fontSize="16px"
          lineHeight="19px"
          isBold
        />
        <div className="cart_separator"></div>
        <ReactSVG
          className="cart_shopping-cart"
          src="/img/shopping-cart.svg"
          alt="cart"
        />
        <Text
          className="cart_count"
          text="4"
          fontSize="16px"
          lineHeight="19px"
          isBold
        />
      </StyledCart>
    </StyledHeader>
  );
};

export default React.memo(Header);
