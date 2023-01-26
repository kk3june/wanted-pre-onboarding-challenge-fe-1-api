import styled from '@emotion/styled';
import TodoList from '../../molecules/TodoList';
import TodoDetail from '../../molecules/TodoDetail';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  max-width: 1000px;
  height: 100%;
`;

type GetTodoTypes = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export default function Todo() {
  const [todos, setTodos] = useState<GetTodoTypes[]>([
    {
      title: '',
      content: '',
      id: '',
      createdAt: '',
      updatedAt: '',
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem('user-token');
    const getTodos = () => {
      axios
        .get('http://localhost:8080/todos', {
          headers: { Authorization: JSON.stringify(token) },
        })
        .then((res) => setTodos(res.data.data));
    };
    getTodos();
  }, []);
  return (
    <Container>
      <TodoList todos={todos} />
      <TodoDetail />
    </Container>
  );
}
