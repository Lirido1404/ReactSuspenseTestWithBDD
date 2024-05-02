import React from "react";
import { fetchData } from "../api/infos/FetchInfos";

async function FetchPostsFromBDD() {
  const res = await fetchData();

  return (
    <div>
      {res.map((el) => (
        <>
          <p>{el.title}</p>
          <p>{el.body}</p>
          <hr />
        </>
      ))}
    </div>
  );
}

export default FetchPostsFromBDD;
