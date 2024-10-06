"use client"
import {Input} from "@/components/ui/input";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {useRef, useState} from "react";
import {useRouter} from "next/navigation";

export default function TodoCreate() {
    const title = useRef('');
    const router = useRouter()
    const [completed, setCompleted] = useState(false)
    const callback = async (e) => {
        e.preventDefault()
        const titleValue = title.current.value
        const data = await fetch(`http://localhost:3001/todos/`, {
            method: 'POST',
            body: JSON.stringify({title: titleValue, completed}),
        })
        const todo = await data.json();
        if (data.ok) {
            router.push('/todos?createdItem=' + todo.id)
        }

    }
    return (
        <main className="container">
            <form className="flex flex-col gap-y-2">
                <div className="flex items-center space-x-2">
                    <Label htmlFor="title">Title</Label>
                    <Input ref={title} type="text" id={"title"} name={'title'} autofocus/>
                </div>
                <div className="flex items-center space-x-2">
                    <Label htmlFor="completed">Completed</Label>
                    <Switch checked={completed} onCheckedChange={setCompleted} id="completed"/>
                </div>
                <Button onClick={callback}>Create</Button>
            </form>
        </main>
    );
}
