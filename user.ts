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

// export class Users {
//     users: User[];
//     constructor() {
//         this.users = [];
//     }
//     addUser(user: User) {
//         this.users.push(user);
//     }
//     removeUser(user: User) {
//         this.users = this.users.filter(u => u.username !== user.username);
//     }
//     getUsers(): User[] {
//         return this.users;
//     }
// }