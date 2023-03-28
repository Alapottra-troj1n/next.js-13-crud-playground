import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-slate-900/50 py-5 px-4 text-white flex items-center  gap-10">
      <Link href={'/'}>
        <h2 className=" text-xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
          NEXT CRUD
        </h2>
      </Link>
      <Link href="/crud">LIST</Link>
    </div>
  );
}
