import React from "react";
import Delete from "./_components/Delete";
import Form from "./_components/Form";
import View from "./_components/View";
import { unstable_cacheLife as cacheLife } from "next/cache";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
// import { unstable_cache } from "next/cache";
// import { cache } from "react";

interface ITodo {
    id: string;
    title: string;
}

// const getTodoList = unstable_cache(async () => {
//     const response = await fetch(`http://localhost:3001/todos`);
//     const data = await response.json();
//     return data;
// }, [""], {
//     tags: ["todo-list"], // On-demand revalidation, Cache invalidation
//     // revalidate: 10, // Revalidate every 10 seconds, Time space
// })

// Cache này xử lí trong quá trình render giống như useMemo.
// const getTodoList = cache(async () => {
//     const response = await fetch(`http://localhost:3001/todos`);
//     const data = await response.json();
//     return data;
// })

const getTodoList = async () => {
    "use cache";
    // cacheLife("seconds");
    cacheTag("todo-list"); // On-demand revalidation, Cache invalidation
    const response = await fetch(`http://localhost:3001/todos`);
    const data = await response.json();
    return data;
};

export default async function TodoPage() {
    const todoList = await getTodoList();
    return (
        <div className="w-3/4 mx-auto py-3">
            <h1 className="text-4xl">TodoList</h1>
            <ul className="list-disc list-inside mt-3">
                {
                    todoList.map((todo: ITodo) => (
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
            <Form />
        </div>
    );
}
