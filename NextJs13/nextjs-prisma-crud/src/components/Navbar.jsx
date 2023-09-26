import Link from 'next/link';

function Navbar() {
  return (
    <nav className='bg-slate-900 mb-4'>
      <div className='container mx-auto flex justify-between items-center py-3'>
        <Link href='/'>
          <h3 className='font-bold text-3xl text-slate-200 hover:text-slate-50'>
            NextCRUD
          </h3>
        </Link>

        <ul className='flex gap-x-2 text-lg font-bold'>
          <li className='text-slate-200 hover:text-slate-50'>
            <Link href='/new'>Create</Link>
          </li>
          <li className='text-slate-200 hover:text-slate-50'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
