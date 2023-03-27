export default async function getAllPosts() {
    const res = await fetch('https://next-js-13-crud-playground.vercel.app/api/get-all-posts', {cache:"no-store"});

    return res.json()
}
