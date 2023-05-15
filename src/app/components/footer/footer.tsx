import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #043156;
  color: #6b8298;
  padding: 1rem;
  text-align: center;
`;

type FooterProps = {
  companyName: string;
  isMobile: boolean;
};

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} {companyName}
    </FooterContainer>
  );
};

export default Footer;
