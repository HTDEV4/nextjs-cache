"use client"

import { deleteTodo } from "../action";

export default function Delete({ id }: { id: string }) {
    return (
        <button
            className="border-2 border-red-500 rounded-md ms-2 mt-2 bg-red-500 "
            onClick={() => deleteTodo(id)}
        >
            Delete
        </button>
    );
}
