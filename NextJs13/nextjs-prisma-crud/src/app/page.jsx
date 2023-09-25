import { prisma } from '@/libs/prisma';

const loadTasks = async () => {
  return await prisma.task.findMany();
};

async function HomePage() {
  const tasks = await loadTasks();
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3'>
        {tasks.map((task) => (
          <div
            key={task.id}
            className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer'
          >
            <h3 className='font-bold text-2xl mb-2'>{task.title}</h3>
            <p>{task.description}</p>
            <p>{new Date(task.createdAt).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
