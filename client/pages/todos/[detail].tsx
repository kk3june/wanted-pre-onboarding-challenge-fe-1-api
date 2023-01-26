import type { NextPage } from 'next';
import Layout from '../../src/components/template/Layout';
import Todos from '../../src/components/organisms/Todo';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const TodoDetail: NextPage = () => {
  const router = useRouter();
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('user-token');
    setUserToken(JSON.stringify(token));
    if (!token) router.push('/');
  }, [userToken]);

  return (
    <Layout>
      <Todos />
    </Layout>
  );
};

export default TodoDetail;
