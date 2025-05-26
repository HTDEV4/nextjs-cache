// "use cache"; // thằng này sẽ cache dữ liệu trong toàn file

import Form from "./_components/Form";
import SearchForm from "./_components/SearchForm";
import TodoList from "./_components/TodoList";

// import { unstable_cacheLife as cacheLife } from "next/cache";
// export const dynamic = "force-static"; // thằng này sẽ không hoạt động với dữ liệu dynamic, nó sẽ không cache dữ liệu trong phạm vi này. Nếu muốn dùng th này thì đưa nó về client 
export interface ITodo {
    id: string;
    title: string;
}

const getTodoList = async () => {
    const response = await fetch(`http://localhost:3001/todos`, {
        cache: "force-cache",
        next: {
            tags: ["todo-list"],
        }
    });
    const data = await response.json();
    return data;
};

export default async function TodoPage() {
    // cacheLife("minutes");
    const todoList = await getTodoList();

    return (
        <div className="w-3/4 mx-auto py-3">
            <h2 className="text-4xl">Todo List</h2>
            <SearchForm />
            <TodoList todoList={todoList} />
            <Form />
        </div>
    );
}
