"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";
export default function Post() {
  const router = useRouter();

  return (
    <main className="container pt-5">
      {/* {router.query.id != undefined && ( */}
      <Link href="#" onClick={() => router.back()}>
        <ArrowLeftCircle className="mb-3" />
      </Link>
      {/* )} */}
      <main className="flex flex-col items-center">
        <Image
          alt="sampleimage"
          className="mb-1 rounded-lg"
          width={1000}
          height={500}
          style={{
            objectFit: "cover",
            width: "100%",
            aspectRatio: "16/9",
            maxWidth: "600px",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png"
        />
        <h1 className="text-4xl font-bold mb-3">Sample Title</h1>
        <p className="text-left w-full md:w-2/3">
          test test test test test
          <br />
          test
        </p>
      </main>
    </main>
  );
}
