import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to DajDalej</h1>
      <Link
        href="/login"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login
      </Link>
    </main>
  );
}
