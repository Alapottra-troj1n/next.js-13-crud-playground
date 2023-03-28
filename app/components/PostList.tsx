import { Post } from "@/types";
import PostComponent from "./PostComponent";

type responseProp = {
  success: boolean;
  posts: Post[];
};
const getAllPosts = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-posts`,
    { cache: "no-store" }
  );

  return res.json();
};

export default async function PostList() {
  const posts: responseProp = await getAllPosts();

  const content = posts.posts.map((post) => (
    <PostComponent key={post.id} post={post} />
  ));

  return (
    <div>
      <div className=" w-full flex flex-col  gap-4">{content}</div>
    </div>
  );
}
export const revalidate = 10;
