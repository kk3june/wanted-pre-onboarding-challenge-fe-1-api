import { Input } from '../../atoms/Input';
import styled from '@emotion/styled';

type Props = {
  isLogin: boolean;
  handleEmail?: (value: string) => void;
  handlePassword?: (value: string) => void;
  handleConfirm?: (value: string) => void;
};

const Container = styled.div`
  width: 100%;
`;

export default function SignInputs({
  isLogin,
  handleEmail,
  handlePassword,
  handleConfirm,
}: Props) {
  return (
    <Container>
      {isLogin ? (
        <div>
          <Input
            type="email"
            placeholder="Email address"
            onChange={handleEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>
      ) : (
        <div>
          <Input
            type="email"
            placeholder="Email address"
            onChange={handleEmail}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
          <Input
            type="password"
            placeholder="Confirm your Password"
            onChange={handleConfirm}
          />
        </div>
      )}
    </Container>
  );
}
