import { Project, Task, Urgent, Personal } from './tasks';
import {
  Decorator,
  UrgentTaskDecorator,
  PersonalTaskDecorator,
  ProjectTaskDecorator,
} from "./taskDecorator";

export interface TaskFactory {
  createTask(name: string, notificationIsOn: boolean): Task;
}

export class UrgentTaskFactory implements TaskFactory {
  public createTask(name: string, notificationIsOn: boolean): Task {
    const task = new Urgent(name, notificationIsOn);
    if(notificationIsOn) 
      return new UrgentTaskDecorator(task);
    return task;
  }
}

export class PersonalTaskFactory implements TaskFactory {
  public createTask(name: string, notificationIsOn: boolean): Task {
    const task = new Personal(name, notificationIsOn);
    if (notificationIsOn) 
        return new PersonalTaskDecorator(task);
    return task;
}
}

export class ProjectTaskFactory implements TaskFactory {
    public createTask(name: string, notificationIsOn: boolean): Task {
      const task = new Project(name, notificationIsOn);
      if (notificationIsOn) 
        return new ProjectTaskDecorator(task);
      return task;
    }
}

