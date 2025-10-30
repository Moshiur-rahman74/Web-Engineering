const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');

let totalTasks = 0;
let completedTasks = 0;

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    totalTasks++;
    updateCounters();

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            span.classList.add('completed');
            completedTasks++;
        } else {
            span.classList.remove('completed');
            completedTasks--;
        }
        updateCounters();
    });

    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li);
        totalTasks--;
        if (checkbox.checked) completedTasks--;
        updateCounters();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = '';
});

function updateCounters() {
    totalCount.textContent = totalTasks;
    completedCount.textContent = completedTasks;
}