import { TaskFactory, UrgentTaskFactory } from "./taskFactory";


export interface Task {
    name: string;
    label?: string;
    notificationIsOn: boolean;
    toggleNotification(): void;
    
}

export class Urgent implements Task {
    name: string;
    label: string;
    notificationIsOn: boolean;
    constructor(name: string, notificationIsOn: boolean) {
        this.name = name;
        this.label = 'Urgent';
        this.notificationIsOn = notificationIsOn;
    }
    toggleNotification() {
        this.notificationIsOn = !this.notificationIsOn;
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

}

