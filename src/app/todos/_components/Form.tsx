"use client"

import { revalidateTag } from "@/app/utils/cache";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

export default function Form() {
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const title = formData.get("title");

        const response = await fetch(`http://localhost:3001/todos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title }),
        });

        if (response.ok) {
            // revalidate cache
            revalidateTag("todo-list"); // hàm custom trong utils
            router.refresh();
            (e.target as HTMLFormElement).reset();
        }
    }
    return (
        <form action="" className="max-w-md mx-auto" onSubmit={handleSubmit}>
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
    );
}
