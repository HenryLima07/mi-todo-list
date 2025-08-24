// src/search.jsx
export function searchTasks(query, tasks) {
  return tasks.filter(task => 
    task.title.includes(query) || 
    task.description.includes(query)
  );
}