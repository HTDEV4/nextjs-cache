import React from "react";
import { create } from "./action";
import Delete from "./_components/Delete";

interface ITodo {
    id: string;
    title: string;
}

const getTodoList = async () => {
    const response = await fetch(`http://localhost:3001/todos`, {
        // 2 th cùng tồn tại thì sẽ chạy th next
        cache: "force-cache", // th này nó sẽ chạy dữ liệu cũ chứ kh chạy dữ liệu mới
        next: {
            // revalidate: 10,
            tags: ["todo-list"]
        }
    });
    return response.json();
}

export default async function TodoPage() {
    const todoList = await getTodoList();
    return (
        <div className="w-3/4 mx-auto py-3">
            <h1 className="text-4xl">TodoList</h1>
            <ul className="list-disc list-inside mt-3">
                {
                    todoList.map((todo: ITodo) => (
                        <li key={todo.id}>
                            {todo.title}
                            <Delete id={todo.id} />
                        </li>
                    ))
                }
            </ul>
            <form action={create} className="max-w-md mx-auto">
                <input
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-3"
                    type="text"
                    name="title"
                    placeholder="Title..."
                />
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2"
                    type="submit"
                >
                    Add Todo
                </button>
            </form>
        </div>
    );
}
