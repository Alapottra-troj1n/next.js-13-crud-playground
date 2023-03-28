import getAllPosts from "@/lib/getAllPosts";
import { Post } from "@/types";
import PostComponent from "../components/PostComponent";


export const revalidate = 0;

export default async function PostList() {
  const posts: Post[] =  await getAllPosts();

  const content = posts.map((post) => (
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



