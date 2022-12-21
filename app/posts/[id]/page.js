import Link from 'next/link';
import { Suspense } from 'react';

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function Comments({ id }) {
  await delay(2000);
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((res) => res.json());

  return (
    <>
      <h2 className="text-xl font-bold text-blue-800">Comments</h2>

      <ul className="flex flex-col gap-2">
        {comments.map((comment) => (
          <li key={comment.id}>
            <details>
              <summary className="cursor-pointer">{comment.name}</summary>
              <p className="p-4 border border-gray-400">{comment.body}</p>
            </details>
          </li>
        ))}
      </ul>
    </>
  );
}

export default async function Page({ params }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex gap-2 items-center">
        <li>
          <Link className="text-blue-500 hover:text-blue-800" href="/posts">
            Back
          </Link>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </li>
        <li>{post.title}</li>
      </ul>

      <h1 className="text-2xl font-bold">{post.title}</h1>

      <p>{post.body}</p>

      <Suspense fallback="Loading...">
        <Comments id={params.id} />
      </Suspense>
    </div>
  );
}
