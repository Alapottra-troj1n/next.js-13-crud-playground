import { DateTime } from "@prisma/client";

type Post = {
    "id": string,
    "title": string,
    "content": string,
    "createdAt": DateTime,
    "updatedAt": DateTime,
}