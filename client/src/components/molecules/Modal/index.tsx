import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import axios from 'axios';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.9;
  overflow: hidden;
`;

const ModalWrapper = styled.div`
  width: 60%;
  min-width: 700px;
  border-radius: 10px;
  opacity: 1;
  z-index: 10;
  background-color: black;
`;

const Header = styled.div`
  width: 100%;
`;
const StyledForm = styled.form`
  input:nth-of-type(1) {
    margin-bottom: 20px;
  }
`;
const BtnWrapper = styled.div`
  display: flex;
  button {
    &:hover {
      background: linear-gradient(
        rgb(153, 51, 255) -97.49%,
        rgb(97, 87, 255) 94.14%
      );
    }
  }
`;

type TodoTypes = {
  title: string;
  content: string;
};

type Props = {
  closeModal: () => void;
};

export default function Modal({ closeModal }: Props) {
  const [userToken, setUserToken] = useState('');
  const [newTodo, setNewTodo] = useState<TodoTypes>({
    title: '',
    content: '',
  });

  const handleNewTodoTitle = (value: string) => {
    setNewTodo((prevState) => {
      return { ...prevState, title: value };
    });
  };
  const handleNewTodoContent = (value: string) => {
    setNewTodo((prevState) => {
      return { ...prevState, content: value };
    });
  };

  const handleSubmit = () => {
    axios
      .post('http://localhost:8080/todos', newTodo, {
        headers: { Authorization: userToken },
      })
      .then((res) => console.log(res.data));
  };

  useEffect(() => {
    const token = localStorage.getItem('user-token');
    setUserToken(JSON.stringify(token));
  }, [newTodo]);

  return (
    <Container>
      <ModalWrapper>
        <Header>
          <Text>Todo 추가하기</Text>
        </Header>
        <StyledForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="제목을 입력하세요."
            onChange={handleNewTodoTitle}
          />
          <Input
            type="textarea"
            placeholder="내용을 입력하세요."
            onChange={handleNewTodoContent}
          />
          <BtnWrapper>
            <Button type="button" onClick={closeModal}>
              닫기
            </Button>
            <Button type="submit">추가</Button>
          </BtnWrapper>
        </StyledForm>
      </ModalWrapper>
    </Container>
  );
}
