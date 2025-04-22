// all components created in app directory are server components by default
// if you want to create a client component, you need to add 'use client' at the top of the file
// In Next.js in which compponents we will fetch data the component must be a server component
// Function must be async and return a promise

// When to use revalidating, cashing, and static generation/server components?
// 1. Static Generation: Use when the data doesn't change often and can be generated at build time. Ideal for static sites or pages with infrequent updates.
// 2. Server Components: Use when you need to fetch data on the server for each request. Ideal for dynamic content that changes frequently or requires server-side processing. This is the default behavior in Next.js app directory.
// 3. Client Components: Use when you need to handle user interactions or manage local state. Ideal for components that require interactivity or client-side logic. Use 'use client' directive to create a client component.
// 4. Revalidation: Use when you want to cache data for a specific duration and revalidate it after that period. Ideal for data that changes periodically but doesn't require real-time updates.
// 5. Caching: Use when you want to cache data for a specific duration and serve it from the cache. Ideal for data that doesn't change often and can be cached for performance optimization.
// 6. Client-side Fetching: Use when you need to fetch data on the client side after the initial render. Ideal for data that doesn't need to be pre-rendered or requires user interactions to fetch.

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
