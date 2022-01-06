export function renderTodo(todo) {
    // create a div and a p tag
    const todoContainerEl = document.createElement('div');
    const todoEl = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete) {
        todoContainerEl.classList.add('complete');
    } else {
        todoContainerEl.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoContainerEl.classList.add('todo');
    // put the todo's text into the p tag
    todoEl.textContent = todo.todo;
    // append stuff
    todoContainerEl.append(todoEl);
    // return the div
    return todoContainerEl;
}