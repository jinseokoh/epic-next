import { LogoutButton } from "@/components/custom/logout-button";
import Link from "next/link";

interface AuthUserProps {
  username: string;
  email: string;
}

export function LoggedInUser({
  userData,
}: {
  readonly userData: AuthUserProps;
}) {
  return (
    <div className="flex gap-2">
      <Link
        href="/dashboard/account"
        className="font-semibold hover:text-primary"
      >
        {userData.username}
      </Link>
      <LogoutButton />
    </div>
  );
}
