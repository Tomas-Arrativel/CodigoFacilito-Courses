'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function NewForm() {
  const { handleSubmit, register } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('/api/tasks', data);
    router.push('/');
  });

  return (
    <section className='h-screen flex items-center justify-center'>
      <form onSubmit={onSubmit}>
        <label htmlFor='title' className='font-bold text-xs'>
          Escribe tu titulo:
        </label>
        <input
          id='title'
          type='text'
          placeholder='Escribe un titulo'
          className='px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-gray-600 block mb-2'
          {...register('title')}
        />

        <label htmlFor='description' className='font-bold text-xs'>
          Escribe tu descripción:
        </label>
        <textarea
          id='description'
          placeholder='Escribe una descripción'
          className='px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-gray-600 block w-full mb-2'
          {...register('description')}
        ></textarea>
        <button className='bg-sky-500 px-3 p-2 rounded-md'>Crear tarea</button>
      </form>
    </section>
  );
}

export default NewForm;
