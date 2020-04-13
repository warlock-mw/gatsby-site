import React from "react";

import Layout from "@/components/layout";
import Counter from "@/components/counter";

const IndexPage = () => {
  console.log(`${process.env.QiitaAccessToken}`);
  return (
    <Layout>
      <Counter />
    </Layout>
  )
}

export default IndexPage;
