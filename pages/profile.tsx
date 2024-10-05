import React from 'react';
import Profile from '../src/components/Profile';
import Header from '../src/components/Header';
import '../src/app/globals.css';

const ProfilePage: React.FC = () => {
  return (
    <>
      <Header backgroundImage="/images/profile/profile circle.svg" logoImageName='profile/users/profile.jpeg' showText={false} />
      <main>
        <Profile />
      </main>
    </>
  );
};

export default ProfilePage;