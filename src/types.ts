export type Task = {
    id: number;
    text: string;
    done: boolean;
};

export type CreateTaskRequst = {
    text: string;
}

export type UpdateTaskRequst = {
    text: string;
    done: boolean;
}