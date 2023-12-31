import React, { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from '../../../../../../hooks/useFirebase';

const UserAvatar = () => {
  const { push } = useRouter();
  // const { auth, user, signInWithFacebook, signOutWithGoogle } = useFirebase();
  const user = useSelector((state) => state.user);

  const [isOpenMenu, setIsOpenMenu] = useState(null);

  const clickHandler = () => {
    console.log("UserAvatar:",user);
    console.log("user?.email:",user?.email)
    if (user?.email) {
      push('/profile');
      console.log('profile');
    } else {
      push('/login');
      console.log('login');
    }
  };
  // if (user.email === '') {
  //   return (
  //     <IconButton
  //       sx={{ margin: '0 10px', fontSize: '16px', color: 'white' }}
  //       onClick={clickHandler}
  //     >
  //       <Group sx={{ fontSize: '30px' }} />
  //     </IconButton>
  //   );
  // }
  return (
    <>
      <IconButton onClick={clickHandler}>
        <Avatar alt={user?.name || ''} src={user?.photoURL || ''} />
      </IconButton>

      {/* <Menu
        id="user-menu"
        anchorEl={isOpenMenu}
        open={Boolean(isOpenMenu)}
        onClose={() => setIsOpenMenu(false)}
      >
        <MenuItem
          onClick={() => {
            setIsOpenMenu(false);
            push('/profile');
          }}
        >
          個人頁面
        </MenuItem>
        <MenuItem
          onClick={() => {
            setIsOpenMenu(false);
            push('/profile');
          }}
        >
          帳號設定
        </MenuItem>
        <MenuItem
          onClick={() => {
            signOutWithGoogle();
            push('/');
            setIsOpenMenu(false);
          }}
        >
          登出
        </MenuItem>
      </Menu> */}
    </>
  );
};

export default UserAvatar;
