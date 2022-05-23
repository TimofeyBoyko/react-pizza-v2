import React from "react";

import Layout from "@common/Layout";

import Home from "@pages/Home";

const App = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default React.memo(App);
