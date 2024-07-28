import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <p>NavbaR</p>
      <p>
        <Link href="api/auth/login">Login</Link>
      </p>
      <p>
        <Link href="api/auth/logout">Logout</Link>
      </p>
    </div>
  );
};
export default Navbar;
