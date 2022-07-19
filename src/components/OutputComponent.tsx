import {TodoListType} from "../types/TodoList.type";

type OutputComponentProps = {
    list: {
        todoList: TodoListType
    }
}

export function OutputComponent(res: TodoListType) {
    return (
        <div>

        </div>
    )

}