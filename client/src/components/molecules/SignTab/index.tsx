import { Button } from '../../atoms/Button';
import styled from '@emotion/styled';

type Props = {
  isLogin: boolean;
  onClick: () => void;
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;

export default function SignTab({ isLogin, onClick }: Props) {
  return (
    <BtnContainer>
      <Button isLogin={isLogin} type="button" onClick={onClick}>
        Log In
      </Button>
      <Button isLogin={!isLogin} type="button" onClick={onClick}>
        Sign Up
      </Button>
    </BtnContainer>
  );
}
