import type { NextPage } from 'next';
import Layout from '../src/components/template/Layout';
import Todo from '../src/components/organisms/Todo';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Todos: NextPage = () => {
  const router = useRouter();
  const [userToken, setUserToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('user-token');
    setUserToken(JSON.stringify(token));
    if (!token) router.push('/');
  }, [userToken]);

  return (
    <Layout>
      <Todo />
    </Layout>
  );
};

export default Todos;
