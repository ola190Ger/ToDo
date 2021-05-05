export class Task {
    public id: string
    public taskText: string
    public isCompleted: boolean

    constructor(id: string, taskText: string, isCompleted: boolean) {
        this.id = id
        this.taskText = taskText
        this.isCompleted = false
    }
}