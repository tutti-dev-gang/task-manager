import { Task } from "./tasks";

export class Decorator implements Task {
    protected task: Task;
    constructor(task: Task) {
        this.task = task;
    }
    name: string;
    label?: string;
    notificationIsOn: boolean;
    public color(): string {
        return this.task.color();
    }
    public toggleNotification(): void {
        this.task.toggleNotification();
    }
    public sendNotification(message: string): void {
        this.task.sendNotification(message);
    }
    public getName(): string {
        return this.task.getName();
    }
}


export class UrgentTaskDecorator extends Decorator {
    public color(): string {
        return 'orange';
    }
}

export class PersonalTaskDecorator extends Decorator {
    public color(): string {
        return 'blue';
    }
}

export class ProjectTaskDecorator extends Decorator {
    public color(): string {
        return 'green';
    }
}