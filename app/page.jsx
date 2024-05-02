import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import FetchPosts from "./(components)/FetchPosts";
export default function Home() {
  return (
    <div>
      <div className="p-20 bg-yellow-500 flex justify-center items-center">
        <p>Page.jsx</p>
      </div>
      <Link className="border-2 border-blue-500" href={"/page2"}>
        Page 2
      </Link>
      <Suspense
        fallback={
          <>
            {" "}
            <p className="border-b-2 border-black font-bold">
              Loading <span className="text-red-500">Posts...</span>{" "}
            </p>{" "}
          </>
        }
      >
        <FetchPosts />
      </Suspense>
    </div>
  );
}
