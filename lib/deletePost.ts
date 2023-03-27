export default async function deletePost(id: string) {
    const res = await fetch(`http://localhost:3000/api/delete-post/${id}`,{
        method: 'DELETE',

    });

    const data = await res.json()
    return data;
}
