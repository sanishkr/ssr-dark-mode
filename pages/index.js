import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h2`
  ${tw`text-2xl `};
  color: var(--color-primary);
`;
const Subtitle = styled.h2`
  ${tw`mt-4 text-sm`};
  color: var(--color-secondary);
`;
export default () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center mt-24 text-center">
        <Title className="px-4 text-2xl">
          Pure SSR Dark mode theming in NextJS
        </Title>
        <Subtitle>It even considers system preference theme.</Subtitle>
      </div>
    </div>
  );
};
