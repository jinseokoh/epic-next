// components/custom/kakao-login-button.tsx

"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function KakaoLoginButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleKakaoLogin = () => {
    try {
      setIsLoading(true);
      // Use environment variable if available, otherwise fallback to localhost
      const backendUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
      const kakaoConnectUrl = `${backendUrl}/api/connect/kakao`;
      
      window.location.href = kakaoConnectUrl;
    } catch (error) {
      console.error("Failed to redirect to Kakao login:", error);
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleKakaoLogin}
      className="w-full bg-yellow-300 text-black hover:bg-yellow-400 flex items-center justify-center gap-2"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Connecting...</span>
        </>
      ) : (
        "Continue with Kakao"
      )}
    </Button>
  );
}
