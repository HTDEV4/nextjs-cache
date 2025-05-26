import { notFound } from "next/navigation";

// Sử dụng generateStaticParams thì dữ liệu sẽ được build ngay từ đầu, không cần phải fetch dữ liệu từ server
// export async function generateStaticParams() { 
//     const response = await fetch(`http://localhost:3001/todos`, {
//         cache: "force-cache",
//         next: {
//             tags: [`todo-list`]
//         }
//     });
//     const todoList = await response.json();
//     return todoList.map((todo: { id: string }) => ({
//         id: todo.id.toString(),
//     }));
// }

export const dynamic = "force-static";
const getTodo = async (id: string) => {
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
        cache: "force-cache",
        next: {
            // revalidate: 10,
            // Khi đặc tag như này sẽ xảy ra lỗi là khi xóa cache của 1 cái thì tất cả cái còn lại sẽ bị xóa luôn
            tags: [`todo-${id}`, "todo"]
        }
    });
    if (!response.ok) {
        return false;
    }
    const data = await response.json();
    return data;
}

export default async function TodoDetailPage({ params
}: {
    params: Promise<{ id: string }>,
}) {
    const { id } = await params;
    const todo = await getTodo(id);

    if (!todo) {
        notFound();
    }

    return (
        <div className="w-3/4 mx-auto py-3 mt-3">
            <h1 className="text-4xl">{todo.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia libero quibusdam reiciendis tempora fugit, quod ipsa consequuntur magnam eos alias tenetur in beatae quidem exercitationem, qui reprehenderit voluptatem dolor.</p>
        </div>
    );
}
