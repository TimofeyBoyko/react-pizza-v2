import styled from "styled-components";

import { Base, ITheme } from "@components/Themes";

type StyledFilterProps = { theme: ITheme };

const StyledFilter = styled.nav<StyledFilterProps>`
  width: 100%;
  height: 46px;

  box-sizing: border-box;

  padding: 0px 75px;

  display: flex;
  align-items: center;

  .filter_button {
    margin-right: 10px;
  }
`;

StyledFilter.defaultProps = { theme: Base };

export default StyledFilter;
