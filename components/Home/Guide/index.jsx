import React from 'react';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import CardList from './CardList';

const GuideWrapper = styled.div`
  width: 90%;
  /* height: calc(var(--section-height) + var(--section-height-offset)); */
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  .guide-title {
    color: #536166;
    font-weight: bold;
    font-size: 26px;
    line-height: 50px;
    letter-spacing: 0.08em;
  }

  @media (max-width: 767px) {
    padding-top: 40px;
    padding-bottom: 20px;
  }
`;

const Guide = () => {
  return (
    <GuideWrapper>
      <h2 className="guide-title">大家正在學...</h2>
      <Box sx={{ marginTop: '20px' }}>
        <CardList />
      </Box>
    </GuideWrapper>
  );
};

export default Guide;
