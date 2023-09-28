'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function NewForm({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm();

  const router = useRouter();

  console.log(params);

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/tasks/${params.id}`).then((res) => {
        setValue('title', res.data.title);
        setValue('description', res.data.description);
      });
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await axios.put(`/api/tasks/${params.id}`, data);
    } else {
      await axios.post('/api/tasks', data);
    }
    router.push('/');
    router.refresh();
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
        <button className='bg-sky-500 px-3 p-2 rounded-md'>
          {params.id ? 'Editar' : 'Crear'}
        </button>
      </form>
    </section>
  );
}

export default NewForm;
