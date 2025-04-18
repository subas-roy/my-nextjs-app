'use client';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/dashboard');
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl text-center">Hello world!</h1>
      <button onClick={handleNavigation} className="py-5">
        Dashboard
      </button>
    </div>
  );
};

export default HomePage;
