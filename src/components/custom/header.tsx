import { Logo } from "@/components/custom/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  data: {
    logoText: {
      id: number;
      text: string;
      url: string;
    }
    ctaButton: {
      id: number;
      text: string;
      url: string;
    };
  }
}

export async function Header({ data }: Readonly<HeaderProps>) {
  const { logoText, ctaButton } = data;
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md dark:bg-gray-800">
      <Logo text={logoText.text} />
      <div className="flex items-center gap-4">
        <Link href={ctaButton.url}><Button>{ctaButton.text}</Button></Link>
      </div>
    </div>
  );
}
