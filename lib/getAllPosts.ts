export default async function getAllPosts() {
    const res = await fetch('http://localhost:3000/api/get-all-posts', {cache:"no-store"});

    return res.json()
}
