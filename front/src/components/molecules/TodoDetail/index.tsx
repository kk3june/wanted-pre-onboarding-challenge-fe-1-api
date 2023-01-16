import styled from '@emotion/styled';
import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  width: 30%;
  button {
    background: linear-gradient(
      263.31deg,
      rgb(153, 51, 255) -97.49%,
      rgb(97, 87, 255) 94.14%
    );
    margin-right: 10px;
  }
`;

const Header = styled.div`
  font-size: 36px;
`;
const Content = styled.div`
  font-size: 18px;
`;

export default function TodoDetail() {
  return (
    <Container>
      <Header>
        <Text>todo title</Text>
      </Header>
      <Content>
        <Text>todo content</Text>
      </Content>
      <BtnWrapper>
        <Button type="button">수정</Button>
        <Button type="button">삭제</Button>
      </BtnWrapper>
    </Container>
  );
}
