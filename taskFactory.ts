import { Project, Task, Urgent, Personal } from './tasks';


export interface TaskFactory {
    createTask(name: string): Task;
}

// export abstract class TaskFactory {
//     public abstract createTask(name: string): Task;
// }

export class UrgentTaskFactory implements TaskFactory {
    public createTask(name: string): Task {
        return new Urgent(name, false);
    }
}

export class PersonalTaskFactory implements TaskFactory {
    public createTask(name: string): Task {
        return new Personal(name, false);
    }
}
export class ProjectTaskFactory implements TaskFactory {
    public createTask(name: string): Task {
        return new Project(name, false);
    }
}

