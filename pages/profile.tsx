import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Profile from '../src/components/Profile';
import Header from '../src/components/Header';
import '../src/app/globals.css';

const ProfilePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <>
      <Header backgroundImage="/images/profile/profile circle.svg" logoImageName='profile/users/kadi2.jpg' showText={false} />
      <main>
        <Profile />
      </main>
    </>
  );
};

export default ProfilePage;