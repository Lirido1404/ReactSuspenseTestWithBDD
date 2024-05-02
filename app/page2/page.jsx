import React, { Suspense } from "react";
import Link from "next/link";
import FetchPostsFromBDD from "../(components)/FetchPostsFromBDD";
function page() {
  return (
    <div>
      <p className="text-center font-bold">Page 2</p>
      <Link href={"/"} className="border-2 border-blue-500">
        Back to Page 1
      </Link>
      <Suspense
        fallback={
          <>
            {" "}
            <p className="text-red-500 font-bold">Loading BDD Data</p>{" "}
          </>
        }
      >
        <FetchPostsFromBDD />
      </Suspense>
    </div>
  );
}

export default page;
