/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Text } from '../../atoms/Text';
import { Input } from '../../atoms/Input';
import { Button } from '../../atoms/Button';
import Modal from '../Modal';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 200px;
  margin-top: 40px;
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 30%;
  margin-top: 20px;
  button {
    border: 1px solid rgb(153, 51, 255);
    margin-right: 10px;
    &:hover {
      background: linear-gradient(
        263.31deg,
        rgb(153, 51, 255) -97.49%,
        rgb(97, 87, 255) 94.14%
      );
    }
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 32px;
`;

const Content = styled.div`
  padding: 0 10px;
  font-size: 18px;
`;

export default function TodoDetail() {
  const [onModify, setOnModify] = useState(false);
  const [todoTitle, setTodoTitle] = useState('');
  const [todoDetail, setTodoDetail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickBtn = (event: React.MouseEvent) => {
    event.preventDefault();
    const targetButton = (event.target as HTMLElement).innerText;
    console.log(targetButton);

    if (targetButton === '수정' || targetButton === '완료')
      setOnModify(!onModify);

    if (targetButton === '추가') setIsModalOpen(true);
  };

  useEffect(() => {
    console.log(todoTitle, todoDetail);
  }, [todoDetail, todoTitle]);

  return (
    <Container>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          button {
            width: 30px;
            color: skyblue;
            border: 1px solid skyblue;
            &:hover {
              color: black;
              background-color: skyblue;
            }
          }
        `}
      >
        <Button type="button" onClick={handleClickBtn}>
          추가
        </Button>
      </div>
      <Header>
        <HeaderWrapper>
          {!onModify && <Text>todo title</Text>}
          {onModify && (
            <Input
              type="text"
              placeholder="todo title"
              onChange={setTodoTitle}
            />
          )}
        </HeaderWrapper>
      </Header>

      <Content>
        {!onModify && <Text>todo content</Text>}
        {onModify && (
          <Input
            type="textarea"
            placeholder="todo detail"
            onChange={setTodoDetail}
          />
        )}
      </Content>
      <BtnWrapper>
        <Button type="button" onClick={handleClickBtn}>
          {onModify ? '완료' : '수정'}
        </Button>
        <Button type="button" onClick={handleClickBtn}>
          삭제
        </Button>
      </BtnWrapper>

      {/* Todo 추가 위한 모달창 */}
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
    </Container>
  );
}
