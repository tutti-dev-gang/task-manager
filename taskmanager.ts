import { Task } from "./tasks";

class TaskManager {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }

    removeTask(task: Task) {
        this.tasks = this.tasks.filter(t => t.name !== task.name);
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    getTasksByLabel(label: string): Task[] {
        return this.tasks.filter(t => t.label === label);
    }
    
    getTask(name: string): Task {
        return this.tasks.find(t => t.name === name);
    }

}

export const TASK_MANAGER = new TaskManager();
