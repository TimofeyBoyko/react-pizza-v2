import styled from "styled-components";

import { Base, ITheme } from "@components/Themes";

type StyledSectionProps = {
  withFilter?: boolean;
  theme: ITheme;
};

const StyledSection = styled.section<StyledSectionProps>`
  width: 100%;
  height: 100%;

  box-sizing: border-box;

  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => (props.withFilter ? "90px 1fr" : "1fr")};

  .section_filter {
    display: flex;
    align-items: center;
    padding: 0 75px;
  }

  .section_body {
    width: 100%;
    height: 100%;

    overflow-y: auto;
    overflow-x: hidden;

    padding: 20px 60px 0 75px;

    box-sizing: border-box;
  }
`;

StyledSection.defaultProps = { theme: Base };

export default StyledSection;
