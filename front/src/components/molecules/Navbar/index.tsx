import React from 'react';
import styled from '@emotion/styled';

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
  return (
    <Nav>
      <Container>
        <Logo>To Dos</Logo>
        <UserBtn>user</UserBtn>
      </Container>
    </Nav>
  );
}
