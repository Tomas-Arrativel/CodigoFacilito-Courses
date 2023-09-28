import Link from 'next/link';

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4'>
      <Link href='/'>
        <h3 className='font-bold text-2xl'>NextCRUD</h3>
      </Link>
      <ul>
        <li>
          <Link
            className='text-slate-200 hover:text-slate-400 font-semibold'
            href='/new'
          >
            Crear
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
