

import Form from "./components/Form";
import PostList from "./components/PostList";

export default async function Home() {
 
  return (
    <main>
      <div className="mt-6 container mx-auto">
        <h2 className="text-center text-5xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">SIMPLE CRUD EXAMPLE</h2>
        <div className="grid grid-cols-2 gap-10 items-center mt-28">
          <Form />
            {/* @ts-expect-error Async Server Component */}
          <PostList />
        </div>
      </div>
    </main>
  );
}

