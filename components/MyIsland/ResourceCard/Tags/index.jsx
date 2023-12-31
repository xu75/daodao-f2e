import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Chip from '@mui/material/Chip';
import { COLOR_TABLE } from '../../../../constants/notion';
import { scrollToTop } from '../../../../utils/ux';

const TagsWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

// const TagItemWrapper = styled.li`
//   color: black;
//   border-radius: 15px;
//   padding: 2px 10px;
//   margin: 0 5px;
//   white-space: nowrap;
//   cursor: pointer;
//   ${({ color }) => css`
//     background-color: ${COLOR_TABLE[color ?? "default"]};
//   `}
// `;

const Tags = ({ tags, type }) => {
  // const { query, push } = useRouter();
  const linkTagsHandler = useCallback(
    (name) => {
      // const queryString = tags.join("&");
      open(`/search?${type}=${name}`, '_blank');
    },
    [type],
  );
  return (
    <TagsWrapper>
      {tags.map((name) => (
        <li key={name}>
          <Chip
            label={name}
            onClick={() => linkTagsHandler(name)}
            sx={{
              backgroundColor: COLOR_TABLE.green,
              cursor: 'pointer',
              margin: '5px',
              whiteSpace: 'nowrap',
              fontWeight: 500,
              fontSize: '14px',
              '&:hover': {
                opacity: '60%',
                transition: 'transform 0.4s',
              },
            }}
          />
        </li>
      ))}
    </TagsWrapper>
  );
};

export default Tags;
