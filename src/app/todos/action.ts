"use server"

import { revalidatePath, revalidateTag } from "next/cache";

export const create = async (formData: FormData) => {
    const title = formData.get("title");
    const response = await fetch(`http://localhost:3001/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
    });
    if (response.ok) {
        // Xóa theo cả đường dẫn là trong 1 trang có bao nhiêu đường dẫn là nó xóa hết
        // revalidatePath(`/todos`);
        // Th này sẽ update lại trong bộ nhớ cache
        // Nếu kh có dòng này thì nó chỉ có POST là cập nhật dữ liệu trong db thôi chứ nó kh có GET là lấy hoặc update cho chúng ta
        revalidateTag("todo-list");
    }
}

export const deleteTodo = async (id: string) => {
    const response = await fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        revalidateTag("todo-list");
    }
}