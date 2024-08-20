import { v4 as uuidv4 } from 'uuid';

const getTasks=()=>{
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return storedTasks;
}

const addTask = (task)=>{
    const newTask = { id:uuidv4(), task}; // Cria um objeto de tarefa com o texto fornecido.
    const tasks = getTasks();
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return newTask;
}

const deleteTask=(id)=>{
    const tasks = getTasks();
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

const updateTask = (id, taskText) => {
    const tasks = getTasks();
    const updatedTasks = tasks.map(task => (task.id === id ? { ...task, task: taskText } : task));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export { getTasks, addTask, deleteTask, updateTask };