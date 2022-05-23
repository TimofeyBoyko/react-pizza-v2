import styled from "styled-components";

import { Base, ITheme } from "@components/Themes";

type StyledLayoutProps = {
  theme: ITheme;
};

const StyledLayout = styled.div<StyledLayoutProps>`
  width: 100%;
  height: 100%;

  overflow: hidden;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 45px;

  background: ${(props) => props.theme.background};
`;

StyledLayout.defaultProps = { theme: Base };

const StyledContent = styled.main<StyledLayoutProps>`
  width: 100%;
  max-width: 1340px;
  height: 100%;

  overflow: hidden;

  box-sizing: border-box;

  background: ${(props) => props.theme.layout.contentBackground};

  display: grid;
  grid-template-rows: 101px 1fr;
  grid-template-columns: 1fr;
`;

StyledContent.defaultProps = { theme: Base };

export { StyledLayout, StyledContent };
