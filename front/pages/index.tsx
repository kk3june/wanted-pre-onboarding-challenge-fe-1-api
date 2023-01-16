import type { NextPage } from 'next';
import Layout from '../src/components/template/Layout';

import Todos from '../src/components/organisms/Todos';

const Home: NextPage = () => {
  return (
    <Layout>
      <Todos />
    </Layout>
  );
};

export default Home;
