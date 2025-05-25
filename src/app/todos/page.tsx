import React from "react";

interface ITodo {
    id: string;
    title: string;
}

const getTodoList = async () => {
    const response = await fetch(`http://localhost:3001/todos`, {
        // 2 th cùng tồn tại thì sẽ chạy th next
        cache: "force-cache", // th này nó sẽ chạy dữ liệu cũ chứ kh chạy dữ liệu mới
        next: {
            revalidate: 10,
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
                        <li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}
