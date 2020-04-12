import React from 'react';
import { Link } from "gatsby";

import Layout from '@/components/layout';

const TestPage = () => {
  return (
    <Layout>
      <h1>Test</h1>
      <Link to="/">Top</Link>
    </Layout>
  )
}

export default TestPage;