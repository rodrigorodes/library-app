"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const NavWrapper = styled.nav`
  width: 100%;
  background-color: #222;
  padding: 15px 0;
  display: flex;
  justify-content: center;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <Logo>Library</Logo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/books">Books</NavLink>
        </NavLinks>
      </NavContainer>
    </NavWrapper>
  );
};

export default Navbar;
