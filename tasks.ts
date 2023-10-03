import { TaskFactory, UrgentTaskFactory } from "./taskFactory";


export interface Task {
    name: string;
    label?: string;
    notificationIsOn: boolean;
    toggleNotification(): void;
    color(): string;
    sendNotification(message: string): void;
    getName(): string;
}

export class Urgent implements Task {
    name: string;
    label: string;
    notificationIsOn: boolean;
    constructor(name: string, notificationIsOn: boolean, color: string = 'red') {
        this.name = name;
        this.label = 'Urgent';
        this.notificationIsOn = notificationIsOn;
    }
    toggleNotification() {
        this.notificationIsOn = !this.notificationIsOn;
    }
    color() {
        return 'red';
    }
    sendNotification(message: string) {
        console.log(message);
    }
    getName(): string {
        return this.name;
    }
}

export class Personal implements Task {
    name: string;
    label: string;
    notificationIsOn: boolean;
    constructor(name: string, notificationIsOn: boolean) {
        this.name = name;
        this.label = 'Personal';
        this.notificationIsOn = notificationIsOn;
    }
    toggleNotification() {
        this.notificationIsOn = !this.notificationIsOn;
    }
    color() {
        return 'lightblue';
    }
    sendNotification(message: string) {
        console.log(message);
    }
    getName(): string {
        return this.name;
    }

}

export class Project implements Task {
    name: string;
    label: string;
    notificationIsOn: boolean;
    constructor(name: string, notificationIsOn: boolean) {
        this.name = name;
        this.label = 'Project';
        this.notificationIsOn = notificationIsOn;
    }
    toggleNotification() {
        this.notificationIsOn = !this.notificationIsOn;
    }
    color() {
        return 'lightgreen';
    }
    sendNotification(message: string) {
        console.log(message);
    }
    getName(): string {
        return this.name;
    }

}

