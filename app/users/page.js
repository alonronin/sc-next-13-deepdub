import Link from 'next/link';

export default async function Page() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json()
  );

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-blue-800">Users</h1>

      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              className="text-blue-500 font-bold hover:text-blue-800"
              href={`/users/${user.id}`}
            >
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
