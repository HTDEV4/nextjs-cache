import React from "react";
import Delete from "./_components/Delete";
import Form from "./_components/Form";
import View from "./_components/View";

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
    const data = await response.json();
    return data;
}

export default async function TodoPage() {
    const todoList = await getTodoList();
    return (
        <div className="w-3/4 mx-auto py-3">
            <h1 className="text-4xl">TodoList</h1>
            <ul className="list-disc list-inside mt-3">
                {
                    todoList.map((todo: ITodo) => (
                        <li key={todo.id} className="flex justify-between">
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
