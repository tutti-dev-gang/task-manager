import { TASK_MANAGER } from "./taskmanager";
import { Task } from "./tasks";
import { UrgentTaskFactory, PersonalTaskFactory, ProjectTaskFactory } from "./taskFactory";



console.log(TASK_MANAGER.getTasks());



const tasks = [
    {name: "Task 1",label: "Urgent"},
    {name: "Task 2",label: "Personal"},
    {name: "Task 3",label: "Project"},
];

const factoryLabel = {
    "Urgent": new UrgentTaskFactory(),
    "Personal": new PersonalTaskFactory(),
    "Project": new ProjectTaskFactory()
}

tasks.forEach(task => {
    TASK_MANAGER.addTask(factoryLabel[task.label].createTask(task.name));
});


TASK_MANAGER.getTask("Task 1").toggleNotification();
console.log(TASK_MANAGER.getTask("Task 1"));


console.log(TASK_MANAGER.getTasks());
