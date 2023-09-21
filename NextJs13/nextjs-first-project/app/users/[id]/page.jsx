import Link from 'next/link';

async function fetchUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

const UserPage = async ({ params }) => {
  const user = await fetchUser(params.id);
  return (
    <div className='bg-slate-400 p-6 rounded-md text-black flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <img src={user.avatar} className='rounded-full' />
        <h1 className='font-bold text-2xl mt-2'>
          {user.first_name} {user.last_name}
        </h1>
        <p className='my-2'>Email: {user.email}</p>
      </div>

      <Link href='/' className='italic underline'>
        Ir al inicio
      </Link>
    </div>
  );
};

export default UserPage;
