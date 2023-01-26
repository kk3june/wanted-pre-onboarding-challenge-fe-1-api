import React from 'react';
import styled from '@emotion/styled';
import { Text } from '../../atoms/Text';
import Link from 'next/link';

const Container = styled.ul`
  width: calc(30%-15px);
  min-width: 200px;
  height: calc(100%-50px);
  font-size: 20px;
  line-height: 32px;
  list-style: none;
  padding-left: 0;
  margin-right: 15px;
  overflow: scroll;
`;

const Header = styled.h2``;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    background: linear-gradient(rgb(80, 184, 255) 0 50%);
  }
`;

type GetTodoTypes = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export default function TodoList({ todos }: { todos: GetTodoTypes[] }) {
  return (
    <Container>
      <Header>
        <Text>TodoList</Text>
      </Header>
      {todos.map((todo) => {
        return (
          <Link
            key={todo.id}
            href={{
              pathname: `/todos/[detail]`,
              query: { detail: `${todo.id}` },
            }}
          >
            <ListItem>{todo.title}</ListItem>
          </Link>
        );
      })}
    </Container>
  );
}
