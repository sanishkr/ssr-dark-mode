import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import DarkToggle from './DarkToggle';

const StyledNav = styled.nav`
  ${tw`flex flex-wrap items-center justify-between p-6`}
  background-color: var(--color-secondary);
`;

const Header = () => {
  return (
    <StyledNav>
      <span css={tw`text-base font-semibold tracking-tight`}>
        SSR Dark Mode
      </span>
      <DarkToggle />
    </StyledNav>
  );
};

export default Header;
