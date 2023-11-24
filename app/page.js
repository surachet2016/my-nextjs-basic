import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Next.js",
};

export default function Home() {
  return (
    <main>
      <div>
        <h1>Hello, Home page!</h1>
        <ul>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/components">Components</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
