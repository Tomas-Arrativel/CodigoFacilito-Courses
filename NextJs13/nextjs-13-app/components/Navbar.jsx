import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <h2>My navbar</h2>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/tienda'>Tienda</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
