import { TASK_MANAGER } from "./taskmanager";
import { OBSERVER } from "./observer";
import { Task } from "./tasks";
import { UrgentTaskFactory, PersonalTaskFactory, ProjectTaskFactory } from "./taskFactory";
import { User } from "./user";


console.log(TASK_MANAGER.getTasks());

const users : User[] = [
    new User("user1"),
    new User("user2"),
    new User("user3"),
];

OBSERVER.addUsers(users[0]);

const tasks = [
  { name: "Task 1", label: "Urgent", notificationIsOn: true },
  { name: "Task 2", label: "Urgent", notificationIsOn: false },
  { name: "Task 3", label: "Project", notificationIsOn: true },
  { name: "Task 4", label: "Project", notificationIsOn: false },
  { name: "Task 5", label: "Personal", notificationIsOn: true },
  { name: "Task 6", label: "Personal", notificationIsOn: false },
];

const factoryLabel = {
    "Urgent": new UrgentTaskFactory(),
    "Personal": new PersonalTaskFactory(),
    "Project": new ProjectTaskFactory()
}

// FACTORY PATTERN
tasks.forEach(task => { 
    const taskTemp = factoryLabel[task.label].createTask(
      task.name,
      task.notificationIsOn
    );
    TASK_MANAGER.addTask(taskTemp);
    // OBSERVER PATTERN
    if(task.notificationIsOn)
        OBSERVER.notifyMessage(taskTemp);
});

// DECORATOR PATTERN
console.log(TASK_MANAGER.getAllColors());



