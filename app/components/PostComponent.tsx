"use client";

import deletePost from "@/lib/deletePost";
import { Post } from "@/types";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

type Props = {
  post: Post;
};

export default function PostComponent({ post }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const res = await deletePost(id);

    if (res.success) {
      startTransition(() => {
        router.refresh();
      });
    }
  };

  return (
    <div className="flex mb-4 w-[20rem] justify-between py-4 bg-slate-600 p-3 items-center rounded-md">
      <h2>{post.title}</h2>
      <button
        onClick={() => handleDelete(post.id)}
        className="ml-4 bg-red-400 p-2 text-white rounded-md hover:bg-red-500"
      >
        delete
      </button>
    </div>
  );
}
