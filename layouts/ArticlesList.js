import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import ArticleCard from '../components/ArticleCard';

const Header = styled.h1`
  ${tw`text-6xl text-center text-gray-800 text-black font-mono`}
`;

const ArticleList = ({ articleList, t }) => {
  return (
    <>
      <Header>Articles</Header>
      <div css={tw`mt-4 mx-4 flex flex-wrap justify-around`}>
        {articleList.map((article, i) => (
          <ArticleCard key={i} data={article}></ArticleCard>
        ))}
      </div>
    </>
  );
};

export default ArticleList;
