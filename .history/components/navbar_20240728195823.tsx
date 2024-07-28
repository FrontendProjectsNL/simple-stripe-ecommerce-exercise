'use client';

import {
  LoginLink,
  LogoutLink,
  useKindeBrowserClient,
} from '@kinde-oss/kinde-auth-nextjs';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();
  const { getUser } = getKindeServerSession();

  const user = getUser();
  console.log('user is: ', user);

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
