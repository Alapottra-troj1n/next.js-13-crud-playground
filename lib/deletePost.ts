export default async function deletePost(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/deletepost/${id}`,{
        method: 'DELETE',

    });

    const data = await res.json()
    return data;
}
