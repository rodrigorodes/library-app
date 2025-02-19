import React from 'react';
import GlobalStyle from './styles/globalStyles';
import Container from './components/Container';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import StyledComponentsRegistry from '@/app/lib/styled-components-registry';

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry>
          <Navbar />
          <Container>{children}</Container>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
