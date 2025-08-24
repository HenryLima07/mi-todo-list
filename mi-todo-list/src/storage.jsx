// src/storage.js
export const saveTasks = (tasks) => {
    localStorage.setItem('mi-todo-tasks', JSON.stringify(tasks));
};

export const loadTasks = () => {
    return JSON.parse(localStorage.getItem('mi-todo-tasks')) || [];
};