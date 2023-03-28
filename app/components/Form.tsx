"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function Form() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleSubmit = async(e: React.FormEvent)=> {
    e.preventDefault();
  

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/addpost`,{
        method: 'POST',
        body: JSON.stringify({title,content})
    })
    const data = await res.json();
    console.log(data)

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });

    setTitle("")
    setContent("")
  };

  return (
    <div className="flex justify-center mt-14 text-black">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="title"
          className="border p-3 rounded-md"
        />
        <textarea
          onChange={(e) => setContent(e.target.value)}
          className="border p-3"
          placeholder="content"
          value={content}
          cols={30}
          rows={4}
        ></textarea>
        <button
          className="px-4 py-3 bg-slate-600 hover:bg-slate-700 transition-all text-white rounded-md"
          type="submit"
        >
          ADD POST
        </button>
      </form>
    </div>
  );
}
