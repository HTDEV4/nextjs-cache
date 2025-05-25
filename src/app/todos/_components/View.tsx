"use client"

import { useRouter } from "next/navigation";

export default function View({ id }: { id: string }) {
    const router = useRouter();
    return (
        <button
            className="border-2 rounded-md ms-2 mt-2 border-orange-400 bg-orange-400"
            onClick={() => router.push(`/todos/${id}`)}
        >
            View
        </button>
    );
}
