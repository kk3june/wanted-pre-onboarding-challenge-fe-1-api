import type { NextPage } from 'next';
import Layout from '../src/components/template/Layout';
import Todos from '../src/components/organisms/Todos';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('user-token');
    setUserToken(JSON.stringify(token));
    if (!token) router.push('/auth');
  }, [userToken]);

  return (
    <Layout>
      <Todos />
    </Layout>
  );
};

export default Home;
