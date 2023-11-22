export const updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const readLocalStorage = () => {
    const emptyTasks = [
        { title: "A", description: "Descripción A", done: false },
        { title: "B", description: "Descripción B", done: true },
        { title: "C", description: "Descripción C", done: false },
        { title: "D", description: "Descripción D", done: false },
        ];
    const savedTaskes = JSON.parse(localStorage.getItem("tasks"));
    return savedTaskes? savedTaskes: emptyTasks;
}

