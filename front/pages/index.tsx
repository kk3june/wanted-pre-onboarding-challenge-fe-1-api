import type { NextPage } from 'next';
import Sign from '../src/components/organisms/Sign';
import Layout from '../src/components/template/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Sign />
    </Layout>
  );
};

export default Home;
