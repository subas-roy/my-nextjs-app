// all components created in app directory are server components by default
// if you want to create a client component, you need to add 'use client' at the top of the file
// In Next.js in which compponents we will fetch data the component must be a server component
// Function must be async and return a promise

import React from 'react';

const PostsPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=10',
    { next: { revalidate: 10 } }
    // revalidate: 10 means that the data will be revalidated every 10 seconds
  );

  const posts = await res.json(); // this will return a promise and we need to wait for it to resolve
  // console.log(posts); // this will log the posts to the console
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-2xl">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsPage;
