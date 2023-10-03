import { User } from "./user";
import { Task } from "./tasks";


class Observer{
    users: User[];
    constructor(){ this.users = []; }

    addUsers(user: User){
        this.users.push(user);
    }

    notifyMessage(task: Task){
        this.users.forEach(user => user.notifyTaskAdded(task));
    }


}

export const OBSERVER = new Observer();
