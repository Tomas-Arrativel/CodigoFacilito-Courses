//Partial<T>
interface Task {
  id: number;
  name: string;
  description: string;
}

function updateTask(id: number, task: Partial<Task>) {
  console.log();
}

const newTask = { name: 'Tomás' };
updateTask(1, newTask);

//Required<T>
// interface ToDo {
//   id?: number;
//   name?: string;
// }

const myToDo: Required<ToDo> = { id: 1, name: 'Limpiar' };

//Records<Keys, Types> Creacion de objetos
interface CatInfo {
  age: number;
  name: string;
}

type CatName = 'moi' | 'baris' | 'luffy';
const cats: Record<CatName, CatInfo> = {
  moi: { age: 2, name: '' },
  baris: { age: 2, name: '' },
  luffy: { age: 2, name: '' },
};

//Pick<T, Properties>
interface ToDo {
  title: string;
  description: string;
  completed: boolean;
}

type ToDoPreview = Pick<ToDo, 'title' | 'completed'>;

const otherToDo: ToDoPreview = { completed: true, title: '' };

//Omit<T, Properties>
type ToDoOmitted = Omit<ToDo, 'description'>;
const toDoOmitted: ToDoOmitted = { completed: true, title: '' };
