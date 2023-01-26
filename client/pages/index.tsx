import type { NextPage } from 'next';
import Auth from '../src/components/organisms/Auth';
import Layout from '../src/components/template/Layout';

const Home: NextPage = () => {
  return (
    <Layout withOutNav>
      <Auth />
    </Layout>
  );
};

export default Home;