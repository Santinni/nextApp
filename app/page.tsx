import Link from 'next/link';

import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <Link href="/users" className='navItem'>Users</Link>
      <ProductCard />
    </main>
  );
}