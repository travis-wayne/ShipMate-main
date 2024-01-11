"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export const Social = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  // const onClick = (provider: "google" | "github") => {
  //   signIn(provider, {
  //     callbackUrl: callbackUrl || DEFAULT_LOGIN_REDIRECT,
  //   });
  // }

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        // onClick={() => onClick("google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        // onClick={() => onClick("github")}
      >
        <FaFacebook className="h-5 w-5" />
      </Button>
    </div>
  );
};
