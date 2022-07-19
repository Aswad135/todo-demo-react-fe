export type TodoListType = {
    id: number,
    title:string,
    listHash: string,
    listOfTodos : [
        {
            id: number,
            contents: string,
            done: boolean,
            createdOn: string,
            modifiedOn: string
        }
    ]
}