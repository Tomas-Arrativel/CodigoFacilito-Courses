'use client';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function NewForm({ params }: { params: { id: string } }) {
  const { handleSubmit, register, setValue } = useForm();

  const router = useRouter();

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
    <section className='h-[calc(100vh-8rem)] flex items-center justify-center'>
      <form onSubmit={onSubmit} className='w-1/4'>
        <h1 className='text-3xl font-bold'>
          {params.id ? 'Editar' : 'Crear'} tarea
        </h1>
        <label htmlFor='title' className='font-bold text-xs'>
          Escribe tu titulo:
        </label>
        <input
          id='title'
          type='text'
          placeholder='Escribe un titulo'
          className='px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-300 focus:border-sky-300 text-gray-600 block mb-2 w-full'
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

        <div className='flex justify-between'>
          <button
            type='submit'
            className='bg-sky-500 hover:bg-sky-400 px-3 p-2 rounded-md mt-2'
          >
            {params.id ? 'Editar' : 'Crear'}
          </button>

          {params.id && (
            <button
              type='button'
              className='bg-red-600 hover:bg-red-500 px-3 p-2 rounded-md mt-2'
              onClick={async () => {
                if (confirm('¿Estas seguro de borrar la tarea?')) {
                  await axios.delete(`/api/tasks/${params.id}`);
                  router.push('/');
                  router.refresh();
                }
              }}
            >
              Eliminar
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default NewForm;
