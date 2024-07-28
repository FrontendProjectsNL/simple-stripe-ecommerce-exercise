import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <p>NavbaR</p>
      <p>
        <LoginLink>Login</LoginLink>
      </p>
      <p>
        <LogoutLink>Logout</LogoutLink>
      </p>
    </div>
  );
};
export default Navbar;
