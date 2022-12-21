import './tailwind.css';
import Navigation from './Navigation';

export default function Html({ children }) {
  return (
    <html>
      <head>
        <title>Next.js 13 Server Components</title>
      </head>
      <body>
        <Navigation
          items={[
            { label: 'Home', href: '/', exact: true },
            { label: 'Posts', href: '/posts' },
            { label: 'Users', href: '/users' },
          ]}
        />
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}
