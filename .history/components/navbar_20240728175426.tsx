'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      navbar
      <div>
        <Link href={'/login'}>Login</Link>
      </div>
      <div>
        <Link href="/logout">Logout</Link>
      </div>
    </div>
  );
};
export default Navbar;
