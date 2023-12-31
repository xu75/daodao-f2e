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
const ImageCardList = ({ title, list, direction = 'left', isLoading }) => {
  if (isLoading) {
    return (
      <Box sx={{ marginTop: '20px' }}>
        <SubHeaderWrapper>{title}</SubHeaderWrapper>
        <CardListWrapper>
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
          />
          <Skeleton
            variant="rectangular"
            sx={{
              width: '150px',
              height: '150px',
              flex: '0 0 150px',
              margin: '5px',
            }}
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
          {list.map(
            ({ id, caption, media_url, timestamp, permalink, like_count }) => (
              <Card
                key={id}
                id={id}
                message={caption}
                date={timestamp}
                title={title}
                image={media_url}
                url={permalink}
                likeCount={like_count}
              />
            ),
          )}
        </CardListWrapper>
      </Marquee>
    </Box>
  );
};

export default ImageCardList;
