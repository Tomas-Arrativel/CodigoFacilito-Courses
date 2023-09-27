'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function NewForm() {
  const { handleSubmit, register } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post('/api/tasks', data);
    console.log(res);
  });

  return (
    <section className='h-screen flex items-center justify-center'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Escribe un titulo'
          className='px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-gray-600 block mb-2'
          {...register('title')}
        />
        <textarea
          placeholder='Escribe una descripcion'
          className='px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-gray-600 block w-full mb-4'
          {...register('description')}
        ></textarea>
        <button>Crear tarea</button>
      </form>
    </section>
  );
}

export default NewForm;
