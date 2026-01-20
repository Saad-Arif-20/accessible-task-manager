/**
 * Accessible Task Manager Logic
 * Demonstrates: ARIA state management, LocalStorage, DOM manipulation
 */

// State
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const prefersHighContrast = window.matchMedia('(prefers-contrast: more)').matches;

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const taskForm = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');
const taskStatus = document.getElementById('task-status');

// --- Initialization ---
function init() {
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'high-contrast' || (!savedTheme && prefersHighContrast)) {
        setTheme('high-contrast');
    }

    renderTasks();

    // Event Listeners
    themeToggle.addEventListener('click', toggleTheme);
    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskAction);
}

// --- Theme Logic ---
function toggleTheme() {
    const isHighContrast = document.body.getAttribute('data-theme') === 'high-contrast';
    const newTheme = isHighContrast ? 'standard' : 'high-contrast';
    setTheme(newTheme);
}

function setTheme(theme) {
    if (theme === 'high-contrast') {
        document.body.setAttribute('data-theme', 'high-contrast');
        themeToggle.setAttribute('aria-pressed', 'true');
        themeToggle.querySelector('.btn-text').textContent = "Switch to Standard Mode";
    } else {
        document.body.removeAttribute('data-theme');
        themeToggle.setAttribute('aria-pressed', 'false');
        themeToggle.querySelector('.btn-text').textContent = "Switch to High Contrast";
    }
    localStorage.setItem('theme', theme);
}

// --- Task Logic ---
function addTask(e) {
    e.preventDefault();

    const titleInput = document.getElementById('new-task-title');
    const descInput = document.getElementById('new-task-desc');
    const priorityInput = document.getElementById('new-task-priority');

    const newTask = {
        id: Date.now(),
        title: titleInput.value.trim(),
        description: descInput.value.trim(),
        priority: priorityInput.value,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    // Accessibility: Reset focus and announce
    titleInput.value = '';
    descInput.value = '';
    titleInput.focus();
    announce(`Task "${newTask.title}" added successfully.`);
}

function handleTaskAction(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    const id = Number(btn.dataset.id);

    if (btn.classList.contains('btn-delete')) {
        const taskTitle = tasks.find(t => t.id === id).title;
        tasks = tasks.filter(t => t.id !== id);
        saveTasks();
        renderTasks();
        announce(`Task "${taskTitle}" deleted.`);

        // Return focus to heading as the element is gone
        document.getElementById('task-list-heading').focus();
    }
}

// --- Rendering ---
function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-state">No tasks found. Add one above!</li>';
        taskStatus.textContent = "0 tasks remaining";
        return;
    }

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <div class="task-content">
                <span class="task-title">${escapeHtml(task.title)}</span>
                <span class="task-desc">${escapeHtml(task.description)}</span>
                <span class="badge badge-${task.priority}">Priority: ${task.priority}</span>
            </div>
            <div class="task-actions">
                <button class="btn btn-delete" data-id="${task.id}" aria-label="Delete task: ${escapeHtml(task.title)}">
                    Delete
                </button>
            </div>
        `;
        taskList.appendChild(li);
    });

    taskStatus.textContent = `${tasks.length} tasks remaining`;
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// --- Utilities ---
function announce(message) {
    // Update live region for screen readers
    taskStatus.textContent = message;

    // Reset after delay to show count again (optional, kept simple here)
    setTimeout(() => {
        taskStatus.textContent = `${tasks.length} tasks remaining`;
    }, 3000);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Start App
init();
