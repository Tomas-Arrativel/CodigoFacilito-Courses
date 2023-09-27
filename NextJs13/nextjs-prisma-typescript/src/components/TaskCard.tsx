'use client';
import { Task } from '@prisma/client';
import { useRouter } from 'next/navigation';

interface Props {
  task: Task;
}

function TaskCard({ task }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
      className='bg-gray-900 p-3 hover:cursor-pointer hover:bg-gray-800'
    >
      <h3 className='font-bold text-xl'>{task.title}</h3>
      <p className='text-slate-400'>{task.description}</p>
    </div>
  );
}

export default TaskCard;
