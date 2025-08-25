// src/services/taskService.js
export async function getTasks(page = 1, limit = 10) {
    // Actualización con validación
    if (limit > 100) throw new Error('Limit máximo es 100');
    const offset = (page - 1) * limit;
    return db.query(`SELECT * FROM tasks LIMIT ${limit} OFFSET ${offset}`);
}

function calcularTotal(subtotal) {
    return subtotal * 0.50
}