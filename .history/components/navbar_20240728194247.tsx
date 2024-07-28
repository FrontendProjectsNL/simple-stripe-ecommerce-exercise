'use client';

import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <div>
      <p>NavbaR</p>
      <p>
        <Link href="api/auth/login">Login</Link>
        {/* <LoginLink>Login</LoginLink> */}
      </p>
      <p>
        {isAuthenticated && <Link href="api/auth/logout">Logout</Link>}
        {/* <LogoutLink>Logout</LogoutLink> */}
      </p>
    </div>
  );
};
export default Navbar;
