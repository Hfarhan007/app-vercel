import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Link href="/admin/category">
        <h1>Products Page</h1>
      </Link>
      <div>
        <Image src="/mountain.jpeg" width={800} height={500} />
        <Image src="/mountain1.jpeg" width={800} height={500} />
        <Image src="/mountain2.jpeg" width={800} height={500} />
        <Image src="/mountain3.jpeg" width={800} height={500} />
      </div>
    </>
  );
}
