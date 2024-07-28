import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      navbar
      <p>
        <Link href="/login">Login</Link>
      </p>
      <p>
        <Link href="/logout">Logout</Link>
      </p>
    </div>
  );
};
export default Navbar;
