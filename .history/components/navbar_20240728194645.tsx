'use client';

import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  console.log('isAuthenticated: ', isAuthenticated);
  return (
    <div>
      <p>NavbaR</p>
      <p>
        {!isAuthenticated && <Link href="api/auth/login">Login</Link>}
        {/* <LoginLink>Login</LoginLink> */}
      </p>
      <p>
        {/* {isAuthenticated && <Link href="api/auth/logout">Logout</Link>} */}
        {isAuthenticated && <Link href="api/auth/logout">Logout</Link>}
      </p>
    </div>
  );
};
export default Navbar;
