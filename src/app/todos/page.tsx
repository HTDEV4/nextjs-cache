"use cache"; // thằng này sẽ cache dữ liệu trong toàn file
import Delete from "./_components/Delete";
import Form from "./_components/Form";
import View from "./_components/View";
import { unstable_cacheLife as cacheLife } from "next/cache";

interface ITodo {
    id: string;
    title: string;
}

interface IPost {
    id: string;
    title: string;
}

const getTodoList = async () => {
    const response = await fetch(`http://localhost:3001/todos`);
    const data = await response.json();
    return data;
};

const getPosts = async () => {
    const response = await fetch(`http://localhost:3001/posts`);
    return response.json();
};

export default async function TodoPage() {
    cacheLife("minutes");
    const todoList = await getTodoList();
    const postList = await getPosts();
    return (
        <div className="w-3/4 mx-auto py-3">
            <h2 className="text-4xl">Todo List</h2>
            <ul className="list-disc list-inside mt-2">
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
            <h2 className="text-4xl mt-3">Post List</h2>
            <ul className="list-disc list-inside mt-2">
                {
                    postList.map((post: IPost) => (
                        <li key={post.id} className="flex justify-between items-center">
                            - {post.title}
                            <div>
                                <View id={post.id} />
                                <Delete id={post.id} />
                            </div>
                        </li>
                    ))
                }
            </ul>
            <Form />
        </div>
    );
}
