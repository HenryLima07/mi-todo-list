// src/services/taskService.js
export async function getTasks(page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    return db.query(`SELECT * FROM tasks LIMIT ${limit} OFFSET ${offset}`);
}