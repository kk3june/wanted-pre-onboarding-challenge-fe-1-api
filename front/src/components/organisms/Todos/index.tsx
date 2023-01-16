import styled from '@emotion/styled';
import TodoList from '../../molecules/TodoList';
import TodoDetail from '../../molecules/TodoDetail';
import React from 'react';

const Container = styled.div`
  display: flex;
  margin-top: 40px;
  max-width: 1000px;
  height: 100%;
`;

export default function Todos() {
  return (
    <Container>
      <TodoList />
      <TodoDetail />
    </Container>
  );
}
