import React from "react";

import Layout from "@/components/layout";
import List from '@/components/qiita/List';

const QiitaPage = () => {
  return (
    <Layout>
      <p>Qiita</p>
      <List />
    </Layout>
  )
}

export default QiitaPage;