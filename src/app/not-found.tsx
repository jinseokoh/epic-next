import { BeerIcon } from "lucide-react";
import Link from "next/link";

export default function NotFoundRoot() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4">
        <BeerIcon className="h-24 w-24 text-pink-500 dark:text-pink-400" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          에구머니
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          요청한 페이지는 지구에 존재하지 않습니다.
        </p>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
