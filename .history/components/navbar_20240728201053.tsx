import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

const Navbar = async () => {
  //   const { isAuthenticated } = useKindeBrowserClient();
  const { getUser } = getKindeServerSession();

  const user = await getUser();
  console.log('==========================>>>>>> ', user);

  return (
    <div>
      <p>NavbaR</p>
      <p>
        {/* {!isAuthenticated && <Link href="api/auth/login">Login</Link>} */}
        {!user && <Link href="api/auth/login">Login</Link>}
      </p>
      <p>
        {/* {isAuthenticated && <Link href="api/auth/logout">Logout</Link>} */}
        {user && <Link href="api/auth/logout">Logout</Link>}
      </p>
    </div>
  );
};
export default Navbar;
