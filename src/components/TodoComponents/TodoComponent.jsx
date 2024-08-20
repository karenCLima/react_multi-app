// Importa os hooks useState e useEffect da biblioteca React para gerenciar estado e efeitos colaterais.
import { useState, useEffect } from 'react';
// Importa a biblioteca axios para fazer requisições HTTP.
import axios from 'axios';
// Importa a biblioteca styled-components para criar componentes estilizados.
import styled from 'styled-components';
import { getTasks, addTask, deleteTask, updateTask } from '../../service/TaskService'

// Cria um componente estilizado chamado Title usando styled-components.
// Esse componente estiliza um <h2> com cor, margem, tamanho da fonte e alinhamento.
const Title = styled.h2`
  color: #333; // Define a cor do texto como um tom escuro de cinza.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do título.
  font-size: 24px; // Define o tamanho da fonte como 24px.
  text-align: center; // Alinha o texto no centro horizontalmente.
`;

// Cria um componente estilizado chamado Input usando styled-components.
// Esse componente estiliza um <input> com padding, borda, bordas arredondadas, e sombra interna.
const Input = styled.input`
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do input.
  padding: 12px; // Adiciona padding de 12px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 100%; // Define a largura como 100% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus { // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;

// Cria um componente estilizado chamado Button usando styled-components.
// Esse componente estiliza um <button> com padding, cor de fundo, cor do texto, bordas e efeitos de transição.
const Button = styled.button`
  padding: 12px 20px; // Adiciona padding de 12px verticalmente e 20px horizontalmente.
  background-color: #007bff; // Define a cor de fundo como azul.
  color: white; // Define a cor do texto como branco.
  border: none; // Remove a borda padrão do botão.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  margin-bottom: 20px; // Adiciona uma margem de 20px abaixo do botão.

  &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
    background-color: #0056b3; // Muda a cor de fundo para um tom mais escuro de azul.
  }
`;

// Cria um componente estilizado chamado TaskList usando styled-components.
// Esse componente estiliza uma <ul> para listar as tarefas sem estilo de lista padrão.
const TaskList = styled.ul`
  list-style-type: none; // Remove os pontos de lista padrão.
  padding: 0; // Remove o padding padrão.
  width: 100%; // Define a largura como 100% do contêiner pai.
`;

// Cria um componente estilizado chamado TaskItem usando styled-components.
// Esse componente estiliza um <li> com fundo, bordas arredondadas, padding, margem, sombra e efeitos de transição.
const TaskItem = styled.li`
  background: #f9f9f9; // Define o fundo como um tom muito claro de cinza.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  padding: 10px; // Adiciona padding de 10px dentro do item.
  margin-bottom: 10px; // Adiciona uma margem de 10px abaixo do item.
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra sutil ao redor do item.
  font-size: 16px; // Define o tamanho da fonte como 16px.
  transition: background-color 0.3s; // Adiciona uma transição suave para a cor de fundo.
  display: flex; // Define o layout como flexbox.
  justify-content: space-between; // Distribui o espaço entre os itens do item.
  align-items: center; // Alinha os itens no centro verticalmente.

  &:hover { // Aplica estilos ao item quando o cursor está sobre ele.
    background-color: #f1f1f1; // Muda a cor de fundo para um tom ligeiramente mais escuro de cinza.
  }

  button { // Estiliza os botões dentro do TaskItem.
    margin-left: 10px; // Adiciona uma margem de 10px à esquerda do botão.
    background: transparent; // Define o fundo como transparente.
    border: none; // Remove a borda padrão do botão.
    color: red; // Define a cor do texto como vermelho.
    cursor: pointer; // Define o cursor como uma mão ao passar sobre o botão.
    font-size: 16px; // Define o tamanho da fonte como 16px.

    &:hover { // Aplica estilos ao botão quando o cursor está sobre ele.
      color: darkred; // Muda a cor do texto para um tom mais escuro de vermelho.
    }
  }
`;

// Cria um componente estilizado chamado EditInput usando styled-components.
// Esse componente estiliza um <input> para edição de tarefas com padding, borda, bordas arredondadas e sombra interna.
const EditInput = styled.input`
  margin-left: 10px; // Adiciona uma margem de 10px à esquerda do input.
  padding: 6px; // Adiciona padding de 6px dentro do input.
  border: 1px solid #ccc; // Define uma borda de 1px sólida e cinza clara.
  border-radius: 5px; // Adiciona bordas arredondadas de 5px.
  width: 60%; // Define a largura como 60% do contêiner pai.
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); // Adiciona uma sombra interna sutil.
  font-size: 14px; // Define o tamanho da fonte como 14px.
  transition: border-color 0.3s; // Adiciona uma transição suave para a cor da borda.

  &:focus { // Aplica estilos ao input quando ele está em foco.
    border-color: #007bff; // Muda a cor da borda para azul quando o input está em foco.
    outline: none; // Remove o contorno padrão quando o input está em foco.
  }
`;

const TodoComponent = () => {

    // Usa o hook useState para criar variáveis de estado para a tarefa atual, lista de tarefas, tarefa em edição e texto da tarefa em edição.
    const [task, setTask] = useState({
        id: '',
        task: ''
    }); // Estado para a nova tarefa a ser adicionada.
    const [tasks, setTasks] = useState([]); // Estado para a lista de tarefas.
    const [editingTaskId, setEditingTaskId] = useState(null); // Estado para o id da tarefa que está sendo editada.
    const [editingTaskText, setEditingTaskText] = useState(''); // Estado para o texto da tarefa que está sendo editada.

    // Usa o hook useEffect para buscar as tarefas quando o componente é montado.
    useEffect(() => {
        setTasks(getTasks());
    }, []);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setTask(prevState => ({
            ...prevState,
            [name]: value
        }));

    }

    // Função que adiciona uma nova tarefa.
    const handleAddTask = () => {
        if (task.task) { // Verifica se o campo da tarefa não está vazio.
            const newTask = addTask(task.task);
            setTasks([...tasks, newTask]);
            setTask({ id: '', task: '' });
        }
    };

    // Função que exclui uma tarefa.
    const handleDeleteTask = (id) => {
        deleteTask(id) // Faz uma requisição DELETE para excluir a tarefa com o id fornecido.
        setTasks(tasks.filter(task => task.id !== id)); // Atualiza o estado removendo a tarefa excluída.
    };

    // Função que inicia o processo de edição de uma tarefa.
    const handleEditTask = (id, text) => {
        setEditingTaskId(id); // Define o id da tarefa que está sendo editada.
        setEditingTaskText(text); // Define o texto da tarefa que está sendo editada.
    };

    // Função que atualiza uma tarefa existente.
    const handleUpdateTask = (id) => {
        updateTask(id, editingTaskText);
        setTasks(tasks.map(task => (task.id === id ? { ...task, task: editingTaskText } : task)));
        setEditingTaskId(null);
        setEditingTaskText('');
    };
    return (
        <>
            <Title>Todo App</Title> {/* Exibe o título do aplicativo de tarefas */}
            <Input
                type="text"
                name="task"
                value={task.task}
                onChange={handleChange}
                placeholder="Add a new task"
            />
            <Button onClick={handleAddTask}>Add Task</Button>
            <TaskList>
                {tasks.map((task) => (
                    task && task.id ? (
                        <TaskItem key={task.id}>
                            {editingTaskId === task.id ? (
                                <EditInput
                                    type="text"
                                    value={editingTaskText}
                                    onChange={(e) => setEditingTaskText(e.target.value)}
                                    onBlur={() => handleUpdateTask(task.id)}
                                />
                            ) : (
                                <>
                                    {task.task}
                                    <div>
                                        <button onClick={() => handleEditTask(task.id, task.task)}>Edit</button>
                                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                                    </div>
                                </>
                            )}
                        </TaskItem>
                    ) : null
                ))}
            </TaskList>
        </>
    )
}

export default TodoComponent