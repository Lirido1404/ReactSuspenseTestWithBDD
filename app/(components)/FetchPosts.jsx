import React from "react";

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  } catch {
    console.error("Failed to fetch");
  }
};

const wait = async(ms)=>{
   return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function FetchPosts() {
    await wait(3000);
  const posts = await fetchData();
  return (
    <div>
      {posts.slice(0,3).map((post) => (
        <>
          {post.title}
          <hr />
        </>
      ))}
    </div>
  );
}

export default FetchPosts;
