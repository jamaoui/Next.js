import {Button} from "@/components/ui/button";
import Link from "next/link";
import {DeleteTodo} from "@/components/DeleteTodo";

export default async function Todos() {
    const data = await fetch('http://localhost:3001/todos', {
        cache: 'no-store',
    })
    const todos = await data.json();
    return (
        <main className="container">
            <h1 className="mt-10 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Todos
            </h1>
            <p className={'text-gray-500 font-sans'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolorum eaque earum libero odio
                officiis repellendus suscipit veniam? Adipisci commodi dignissimos in ipsam itaque molestiae nisi
                perspiciatis quaerat rem vitae.
            </p>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <div className={'flex justify-end my-2'}>
                    <Button size={'sm'} asChild>
                        <Link href={`/todos/create`}>Create</Link>
                    </Button>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}
                            className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row"
                                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="ps-3">
                                    {todo.title}
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    {todo.completed ?
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                                            Completed
                                        </div>
                                        :
                                        <div className="flex items-center">
                                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                                            Incomplete
                                        </div>
                                    }
                                </div>
                            </td>
                            <td className="flex gap-x-2">
                                <Button size={'sm'} asChild>
                                    <Link href={`/todos/update/${todo.id}`}>Update</Link>
                                </Button>
                                <DeleteTodo todo={todo}/>
                            </td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>

        </main>
    );
}
