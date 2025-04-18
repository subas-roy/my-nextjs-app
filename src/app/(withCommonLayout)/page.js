'use client';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/dashboard');
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl text-center">Welcome to Next.Js Home Page</h1>
    </div>
  );
};

export default HomePage;
