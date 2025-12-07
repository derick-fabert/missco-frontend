import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-black bg-white text-black">
      <nav className="mx-auto flex w-full max-w-5xl justify-between items-center gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:max-w-6xl md:px-6 lg:max-w-7xl lg:px-8">
        <Link href="/" className="w-1/3 sm:w-1/6">
          <Image src="/logo.png" alt="Logo" width={1000} height={1000} />
        </Link>
        <div className="flex flex-wrap flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-xs font-medium sm:text-base">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/for-users" className="hover:underline">
            For Users
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}


