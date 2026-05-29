const tareas = ["tarea1", "tarea2", "tarea3"];

tareas.push("tarea4");
console.log(tareas);

tareas.pop();
console.log(tareas);

tareas.unshift("tareaUnshife");
console.log(tareas);

tareas.splice(1, 1, "tareaSplice");
console.log(tareas);