"use client";
import { CigaretteIcon } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string },
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="space-y-4">
        <CigaretteIcon className="h-24 w-24 text-pink-500 dark:text-pink-400" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          오우 쉣! 개발자 담타중
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          오류 상황을 보고해 주시면 개발자에게 말해놓겠습니다.
        </p>
        <p className="text-pink-800 italic">{error.message}</p>
      </div>
    </div>
  );
}
