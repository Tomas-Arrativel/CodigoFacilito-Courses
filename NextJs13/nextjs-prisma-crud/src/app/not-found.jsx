import Link from 'next/link';

function NotFound() {
  return (
    <section className='flex h-[calc(100vh-10rem)] justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Page not found</h1>
        <Link href='/' className=' text-slate-400 underline mt-2'>
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
