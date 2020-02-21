export const addTask = (task) => {
    return {
        type: 'ADD_TODO',
        text: task
    }
}
export const delTask = (taskId) => {
    return {
        type: 'DEL_TODO',
        del: taskId
    }
}
export default { addTask, delTask };