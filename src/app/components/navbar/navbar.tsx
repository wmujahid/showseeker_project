import React from 'react';
import styled from 'styled-components';
import sslogo from 'public/sslogo2.svg';


const NavbarContainer = styled.nav`
  display: flex;
  justify-items: start;
  align-items: center;
  background-color: #043156;
  color: #6b8298;
  padding: 1rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MenuItem = styled.li`
  margin-right: 1rem;
`;

type NavbarProps = {
  menuItems: string[];
  isMobile: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ menuItems }) => {
  return (
    <NavbarContainer>
      <img src='./sslogo2.png' height={30} width={30} alt='show seeker logo'/>
      <MenuList>
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem}>{menuItem}</MenuItem>
        ))}
      </MenuList>
    </NavbarContainer>
  );
};

export default Navbar;
