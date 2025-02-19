"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #222;
  color: white;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: auto;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: #bbb;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNav>
        <FooterLink href="/">Home</FooterLink>
        <FooterLink href="/books">Contact</FooterLink>
      </FooterNav>
      <Copyright>© {new Date().getFullYear()} All rights reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
