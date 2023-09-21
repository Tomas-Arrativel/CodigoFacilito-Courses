import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <h2>NextJS Course</h2>
      </Link>
      <ul className='navbar__links'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/tienda'>Tienda</Link>
        </li>
        <li>
          <Link href='/posts'>Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
