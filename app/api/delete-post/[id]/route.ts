import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
type ParamsObject = {
  params: {
    id: string;
  };
};
export async function DELETE(request: Request, { params }: ParamsObject) {
  try {
    const post = await prisma.post.delete({ where: { id: params.id } });
    if(post){
      return NextResponse.json({ success: true, post });
    }
  } catch (err) {
    return NextResponse.json({ success: false,error: err });
  }

}
