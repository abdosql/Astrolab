import Profile from '../src/components/Profile';
import Header from '../src/components/Header';
import '../src/app/globals.css';

export default function ProfilePage() {
  return (
    <>
      <Header logoImageName="/profile/profile circle.svg" /> {/* Passez le nom du logo si nécessaire */}
      <Profile />
    </>
  );
}