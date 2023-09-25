'use client';
import { useRouter } from 'next/navigation';

function NewPage() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = res.json();
    console.log(data);

    router.push('/');
  };
  return (
    <div className='h-screen flex justify-center items-center'>
      <form
        className='bg-slate-800 p-10 lg:w-1/3 md:w-1/2'
        onSubmit={handleSubmit}
      >
        <label htmlFor='title' className='font-bold text-sm'>
          Titulo de la tarea
        </label>
        <input
          id='title'
          type='text'
          className='border border-gray-400 p-2 mb-4 w-full text-gray-900'
          placeholder='Titulo'
        />

        <label htmlFor='description' className='font-bold text-sm'>
          Descripcion de la tarea
        </label>
        <textarea
          id='description'
          rows='4'
          className='border border-gray-400 p-2 mb-4 w-full text-gray-900'
          placeholder='Describe tu tarea'
        ></textarea>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
