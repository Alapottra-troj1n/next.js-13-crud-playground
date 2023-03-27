import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try{
    if(body.title && body.content){
      const post = await prisma.post.create({
        data: body,
      });
      return NextResponse.json({ success: true, post });
    }
  }catch(err){
    return NextResponse.json({ success: false, err });
  }
 
 
}
