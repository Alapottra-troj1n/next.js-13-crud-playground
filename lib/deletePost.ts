export default async function deletePost(id: string) {
    const res = await fetch(`https://next-js-13-crud-playground.vercel.app/api/delete-post/${id}`,{
        method: 'DELETE',

    });

    const data = await res.json()
    return data;
}
