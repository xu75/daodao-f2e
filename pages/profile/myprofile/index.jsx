import React from 'react';
import styled from '@emotion/styled';
import Navigation from '../../../shared/components/Navigation_v2';
import Footer from '../../../shared/components/Footer_v2';
import Profile from '../../../components/Profile';

const HomePageWrapper = styled.div`
  --section-height: calc(100vh - 80px);
  --section-height-offset: 80px;
`;

const ProfilePage = () => {
  return (
    <HomePageWrapper>
      <Navigation />
      <Profile />
      <Footer />
    </HomePageWrapper>
  );
};

export default ProfilePage;
