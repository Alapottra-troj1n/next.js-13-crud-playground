export default async function getAllPosts() {
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-posts`, {cache:"no-store"});

    return res.json()
}
