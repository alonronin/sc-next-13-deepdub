import Link from 'next/link';

export default async function Page(props) {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    (res) => res.json()
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-blue-800">Posts</h1>

      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="text-blue-500 font-bold hover:text-blue-800"
              href={`/posts/${post.id}`}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
