import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  border-bottom: 1px solid gray;
  background-color: black;
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const Logo = styled.div``;

const UserBtn = styled.a`
  cursor: pointer;
  color: skyblue;
`;

export default function Navbar() {
  const router = useRouter();
  const [userToken, setUseToken] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('user-token');
    setUseToken(JSON.stringify(token));
  }, [userToken]);

  const handleClick = () => {
    localStorage.removeItem('user-token');
    router.push('/auth');
  };

  return (
    <Nav>
      <Container>
        <Logo>To Dos</Logo>
        <UserBtn onClick={handleClick}>로그아웃</UserBtn>
      </Container>
    </Nav>
  );
}
