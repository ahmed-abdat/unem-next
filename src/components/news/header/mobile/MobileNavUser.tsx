"use client";
import { Button } from "@/components/ui/button";
// import { useUser } from "@/hooks/use-user";
import Link from "next/link";
// import LogoutButton from "@/components/auth/LogoutButton";

export default function MobileNavUser({
  closeOnCurrent,
}: {
  closeOnCurrent: (path: string) => void;
}) {
  const user = null
  return (
      <div className="flex w-full items-center justify-center">
      {!user ? (
          <Button className="flex items-center justify-center w-[90%]"  aria-label="login">
            <Link
              href="/login"
              onClick={() => closeOnCurrent("/login")}
              className="-m-2 block p-2 font-medium text-white"
            >
              تسجيل الدخول
            </Link>
          </Button>
      ) : null}
      </div>
  );
}
