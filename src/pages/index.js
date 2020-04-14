import React from "react";

import Layout from "@/components/layout";
import Counter from "@/components/counter/counter";

const IndexPage = () => {
  return (
    <Layout>
      <p>カウンター</p>
      <Counter />
    </Layout>
  )
}

export default IndexPage;
