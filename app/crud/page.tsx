import { prisma } from "@/prisma/client";

import PostComponent from "../components/PostComponent";

export const revalidate = 0;


export default async function PostList() {
  const posts: Post[] = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
  console.log(posts)

  const content = posts.map((post:Post) => (
    <PostComponent key={post.id} post={post} />
  ));

  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <div className=" w-full flex flex-col  gap-4">{content}</div>
      </div>
    </div>
  );
}
