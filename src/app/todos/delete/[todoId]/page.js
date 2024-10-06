import {redirect} from "next/navigation";

export default async function TodoDelete({params}) {
    const todoId = params.todoId
    const data = await fetch(`http://localhost:3001/todos/${todoId}`, {
        method: 'DELETE'
    })
    if (data.ok) {
        redirect('/todos?deletedTodo='+ todoId)
    }
    return (
        <main className="container">
            {todoId}
        </main>
    );
}
