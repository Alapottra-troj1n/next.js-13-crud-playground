import getAllPosts from "@/lib/getAllPosts";
import { Post } from "@/types";
import PostComponent from "./PostComponent";

type responseProp = {
      success: boolean,
      posts: Post[]

}

export default async function PostList() {
  const postsData: Promise<responseProp> = await getAllPosts();
  const posts = await postsData;

  const content = posts.posts.map((post) => <PostComponent key={post.id} post={post} />);

  return (
  <div>
    <div className=" w-full flex flex-col  gap-4">
    {content}
    </div>
  </div>
  );
}
