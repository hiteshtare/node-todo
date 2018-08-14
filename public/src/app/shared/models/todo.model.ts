export class Todo {
    _id: string;
    username: string;
    name: string;
    isDone: boolean;
    hasAttachment: boolean;
    files: [{
        name: string,
        savedName: string,
        fileType: string,
        size: number
    }]
}