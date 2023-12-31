import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// import { COLOR_TABLE } from "../../../constants/notion";
import { LocalOffer } from '@mui/icons-material';
import { Box } from '@mui/material';
import Tags from './Tags';
// const ListWrapper = styled.ul`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   /* flex-wrap: wrap; */
//   max-width: calc(100vw - 49px);
//   overflow-x: scroll;
//   -ms-overflow-style: none; /* IE */
//   scrollbar-width: none; /* Firefox */
//   &::-webkit-scrollbar {
//     display: none; /* Chrome, Safari, Edge and Opera */
//   }
// `;

const SelectedTags = () => {
  const { push, query } = useRouter();

  const tags = (query?.tags ?? '')
    .split(',')
    .map((tag) => ({ key: 'tags', value: tag }))
    .filter(({ value }) => value !== '');

  // const feeTags = (query?.fee ?? '')
  //   .split(',')
  //   .map((tag) => ({ key: 'fee', value: tag }))
  //   .filter(({ value }) => value !== '');

  // const ageTags = (query?.ages ?? '')
  //   .split(',')
  //   .map((tag) => ({ key: 'ages', value: tag }))
  //   .filter(({ value }) => value !== '');

  const onDelete = useCallback(
    (key, targetValue) => {
      if (typeof query[key] === 'string' && query[key].split(',').length > 1) {
        push({
          pathname: '/search',
          query: {
            ...query,
            [key]: query[key]
              .split(',')
              .filter((value) => value !== targetValue)
              .join(','),
          },
        });
      } else {
        delete query[key];
        push({
          pathname: '/search',
          query,
        });
      }
    },
    [push, query],
  );

  if (tags.length === 0) {
    return <></>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <LocalOffer
        sx={{
          fontSize: '22px',
          color: 'rgb(72, 175, 226)',
          marginRight: '6px',
        }}
      />
      {/* <ListWrapper> */}
      <Tags tags={tags} onDelete={onDelete} />
      {/* <Tags tags={feeTags} onDelete={onDelete} /> */}
      {/* <Tags tags={ageTags} onDelete={onDelete} /> */}
      {/* </ListWrapper> */}
    </Box>
  );
};

export default SelectedTags;
