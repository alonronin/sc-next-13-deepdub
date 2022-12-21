import Link from 'next/link';

export default async function Page({ params }) {
  const user = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex gap-2 items-center">
        <li>
          <Link className="text-blue-500 hover:text-blue-800" href="/users">
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
        <li>{user.name}</li>
      </ul>

      <h1 className="text-2xl font-bold text-blue-800">{user.name}</h1>

      <pre className="font-serif bg-gray-800 text-gray-100 p-8">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
