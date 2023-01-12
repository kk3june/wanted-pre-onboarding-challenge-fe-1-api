import { Input } from '../../atoms/Input';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
`;

export default function SignInputs() {
  return (
    <Container>
      <Input type="email" placeholder="Email address" />
      <Input type="password" placeholder="Password" />
    </Container>
  );
}
