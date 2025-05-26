"use client";
import { useEffect, useState } from "react";
import { ITodo } from "../page";
import Delete from "./Delete";
import View from "./View";
import { useSearchParams } from "next/navigation";

export default function TodoList({ todoList }: { todoList: ITodo[] }) {
    const [todoListState, setTodoListState] = useState(todoList);
    const searchParams = useSearchParams();
    const search = searchParams.get("search") ?? "";

    useEffect(() => {
        const searchTodoList = async () => {
            const response = await fetch(`http://localhost:3001/todos?q=${search}`);
            const data = await response.json();
            setTodoListState(data);
        }
        searchTodoList();
    }, [search]);

    return (
        <ul className="list-disc list-inside mt-2">
            {
                todoListState.map((todo: ITodo) => (
                    <li key={todo.id} className="flex justify-between items-center">
                        - {todo.title}
                        <div>
                            <View id={todo.id} />
                            <Delete id={todo.id} />
                        </div>
                    </li>
                ))
            }
        </ul>
    );
}
