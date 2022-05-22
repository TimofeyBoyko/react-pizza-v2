import styled from "styled-components";

import { Base, ITheme } from "@components/Themes";

type StyledSectionProps = {
  withFilter?: boolean;
  theme: ITheme;
};

const StyledSection = styled.section<StyledSectionProps>`
  width: 100%;
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${(props) => (props.withFilter ? "90px 1fr" : "1fr")};

  .section_filter {
    display: flex;
    align-items: center;
  }

  .section_body {
    width: 100%;
    height: 100%;
  }
`;

StyledSection.defaultProps = { theme: Base };

export default StyledSection;
