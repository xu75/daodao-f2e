import React from 'react';
import styled from '@emotion/styled';
import { Box, Skeleton } from '@mui/material';
import Marquee from 'react-fast-marquee';
import Card from './Card';

const CardListWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const SubHeaderWrapper = styled.h3`
  font-size: 20px;
  color: #536166;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;
const CardList = ({ title, list, direction = 'left', isLoading }) => {
  if (isLoading) {
    return (
      <Box sx={{ marginTop: '20px' }}>
        <SubHeaderWrapper>{title}</SubHeaderWrapper>
        <CardListWrapper>
          <Skeleton
            variant="rectangular"
            width={200}
            height={120}
            sx={{ margin: '5px', flex: '0 0 200px', borderRadius: '20px' }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            height={120}
            sx={{ margin: '5px', flex: '0 0 200px', borderRadius: '20px' }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            height={120}
            sx={{ margin: '5px', flex: '0 0 200px', borderRadius: '20px' }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            height={120}
            sx={{ margin: '5px', flex: '0 0 200px', borderRadius: '20px' }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            height={120}
            sx={{ margin: '5px', flex: '0 0 200px', borderRadius: '20px' }}
          />
          <Skeleton
            variant="rectangular"
            width={200}
            height={120}
            sx={{ margin: '5px', flex: '0 0 200px', borderRadius: '20px' }}
          />
        </CardListWrapper>
      </Box>
    );
  }
  return (
    <Box sx={{ marginTop: '20px' }}>
      <SubHeaderWrapper>{title}</SubHeaderWrapper>
      <Marquee
        // gradient={false}
        gradientWidth={50}
        delay={3}
        pauseOnHover
        direction={direction}
      >
        <CardListWrapper>
          {list.map(({ id, message, created_time, updated_time }) => (
            <Card
              key={id}
              id={id}
              message={message}
              date={created_time ?? updated_time}
              title={title}
            />
          ))}
        </CardListWrapper>
      </Marquee>
    </Box>
  );
};

export default CardList;
