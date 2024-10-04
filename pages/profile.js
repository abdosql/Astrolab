import Profile from '../src/components/Profile';
import Header from '../src/components/Header';
import '../src/app/globals.css';

export default function ProfilePage() {
  return (
    <>
      <Header backgroundImage="/images/profile/profile circle.svg" logoImageName='profile.jpeg' showText={false} /> {/* Passez le nom du logo si nécessaire */}
      <main>
      <Profile />
      </main>
    </>
  );
}