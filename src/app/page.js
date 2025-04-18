import Link from 'next/link';

const HomePage = () => {
  console.log('hello world');
  return (
    <div className="text-center">
      <h1 className="text-2xl text-center">Hello world!</h1>
      <Link href="/dashboard">
        <button className="py-5">Dashboard</button>
      </Link>
    </div>
  );
};

export default HomePage;
