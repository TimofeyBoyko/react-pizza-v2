import React from "react";

import Header from "@common/Header";

import { StyledLayout, StyledContent } from "./StyledLayout";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <StyledContent>
        <Header />
        {children}
      </StyledContent>
    </StyledLayout>
  );
};

export default React.memo(Layout);
