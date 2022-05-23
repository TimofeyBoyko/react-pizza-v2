import styled from "styled-components";

import { Base, ITheme } from "@components/Themes";

type StyledPizzaProps = {
  theme: ITheme;
};

const StyledPizza = styled.div<StyledPizzaProps>`
  height: 480px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  padding-bottom: 20px;

  box-sizing: border-box;
`;

StyledPizza.defaultProps = { theme: Base };

type StyledPizzaImgProps = {
  theme: ITheme;
};

const StyledPizzaImg = styled.img<StyledPizzaImgProps>`
  width: 260px;
  height: 260px;

  margin-left: 13px;

  pointer-events: none;
  user-select: none;
`;

StyledPizzaImg.defaultProps = { theme: Base };

type StyledPizzaNameProps = {
  theme: ITheme;
};

const StyledPizzaName = styled.div<StyledPizzaNameProps>`
  margin-top: 12px;
  margin-bottom: 22px;
`;

StyledPizzaName.defaultProps = { theme: Base };

type StyledPizzaSelectorsProps = {
  theme: ITheme;
};

const StyledPizzaSelectors = styled.div<StyledPizzaSelectorsProps>`
  width: 280px;
  height: 85px;

  background: #eeeeee;

  padding: 6px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-gap: 8px;

  box-sizing: border-box;

  border-radius: 10px;

  margin-bottom: 18px;
`;

StyledPizzaSelectors.defaultProps = { theme: Base };

type StyledPizzaActionsProps = {
  theme: ITheme;
};

const StyledPizzaActions = styled.div<StyledPizzaActionsProps>`
  width: 280px;
  height: 46px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

StyledPizzaActions.defaultProps = { theme: Base };

export {
  StyledPizza,
  StyledPizzaImg,
  StyledPizzaName,
  StyledPizzaSelectors,
  StyledPizzaActions,
};
