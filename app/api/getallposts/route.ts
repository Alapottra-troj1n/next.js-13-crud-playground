import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try{
    const posts = await prisma.post.findMany();
    return NextResponse.json({success: true, posts});
  }catch(err){
    return NextResponse.json({success: false, err});
  }
}
