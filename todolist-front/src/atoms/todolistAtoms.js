import { atom } from "recoil";

export const todolistAtom = atom({
    key: "todolistState",
    default: {
        todolist: [],
        counts: {
            all: 0,
            today: 0,
            important: 0,
            busy: 0,
            complete: 0
        },
    },
});

export const refreshTodolistAtom = atom({
    key: "refreshTodolistState",
    default: true
});