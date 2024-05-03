import Image from "next/image";
import Link from "next/link";
// import styles from 'app/sass/not-found.module.sass'

export default function NotFound() {
  return (
    <main >
      <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-8">Oops! Page not found.</p>
        <Link href="/">
          {/* <a className="text-blue-600 hover:underline">Go back to home page</a> */}
        </Link>
      </div>
    </div>
    </main>
  );
}