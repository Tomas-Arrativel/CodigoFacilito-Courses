import TaskCard from '@/components/TaskCard';
import { prisma } from '@/libs/prisma';

const loadTasks = async () => {
  return await prisma.task.findMany();
};

// export const revalidate = 20;
export const dynamic = 'force-dynamic';

async function HomePage() {
  const tasks = await loadTasks();
  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3'>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
