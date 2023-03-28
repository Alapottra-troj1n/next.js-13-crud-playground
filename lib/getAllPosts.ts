export default async function getAllPosts() {
   
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getallposts`, {cache:"no-store"});

    const data = await res.json()

    return data
}
