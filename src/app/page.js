import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to our Next.js App</h1>
      <div className="flex gap-4">
        <Link href="/screen1">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Theme 1</button>
        </Link>
        <Link href="/screen2">
          <button className="px-4 py-2 bg-green-500 text-white rounded">Theme 2</button>
        </Link>
        <Link href="/screen3">
          <button className="px-4 py-2 bg-red-500 text-white rounded">Theme 3</button>
        </Link>
      </div>
    </div>
  );
}
