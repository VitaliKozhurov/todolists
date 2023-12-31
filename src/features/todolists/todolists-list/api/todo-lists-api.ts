import { AxiosResponse } from 'axios';
import { instance, ResponseType } from 'common/api/api';

export class TodoListsApi {
    static getTodoLists() {
        return instance.get<TodoListServerType[]>('todo-lists');
    }

    static createTodoList(data: { title: string }) {
        return instance.post<
            ResponseType<{ item: TodoListServerType }>,
            AxiosResponse<ResponseType<{ item: TodoListServerType }>>,
            { title: string }
        >('todo-lists', data);
    }

    static updateTodoListTitle(todoListID: string, title: { title: string }) {
        return instance.put<ResponseType, AxiosResponse<ResponseType>, { title: string }>(
            `todo-lists/${todoListID}`,
            title,
        );
    }

    static deleteTodoList(todoListID: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoListID}`);
    }

    static reorderTodoList(todoListID: string, data: { putAfterItemId: string }) {
        return instance.put<ResponseType, AxiosResponse<ResponseType>, { putAfterItemId: string }>(
            `todo-lists/${todoListID}/reorder`,
            data,
        );
    }
}

export type TodoListServerType = {
    id: string;
    title: string;
    addedDate: string;
    order: number;
};
