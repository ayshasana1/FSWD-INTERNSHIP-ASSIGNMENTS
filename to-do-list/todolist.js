const taskInput = document.getElementById('taskinput');
        const addBtn = document.getElementById('addbtn');
        const clearBtn = document.getElementById('clearBtn');
        const taskList = document.getElementById('tasklist');
        const taskCount = document.getElementById('taskCount');

        let tasks = [];

        addBtn.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                tasks.push(taskText);
                renderTasks();
                taskInput.value = '';
            }
        });

        clearBtn.addEventListener('click', () => {
            tasks = [];
            renderTasks();
        });

        function renderTasks() {
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => {
                    tasks.splice(index, 1);
                    renderTasks();
                });
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            });
            taskCount.textContent = `Total Tasks: ${tasks.length}`;
        }