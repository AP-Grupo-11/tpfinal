


export const updateLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

export const readLocalStorage = () => {
    const emptyTasks = [
        { title: "A", description: "Descripción A" },
        { title: "B", description: "Descripción B" },
        { title: "C", description: "Descripción C" },
        { title: "D", description: "Descripción D" },
        ];
    const savedTaskes = JSON.parse(localStorage.getItem("tasks"));
    return savedTaskes? savedTaskes: emptyTasks;
}

