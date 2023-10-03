import { Task } from "./tasks";

export class User {
  username: string;
  constructor(username: string) {
    this.username = username;
  }
  getUsername(): string {
    return this.username;
  }

  notifyTaskAdded(task: Task): void {
    console.log(task.getName() + ' added');
  }
}

