// src/search.jsx
export function searchTasks(query, tasks) {
    return tasks.filter(task => {
        if (!query || query.trim() === "") {
            return [];
        }
        const lowerQuery = query.toLowerCase();
        return tasks.filter(task =>
            task.title.toLowerCase().includes(lowerQuery) ||
            task.description.toLowerCase().includes(lowerQuery)
        );
    });
}