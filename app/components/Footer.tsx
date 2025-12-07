import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-black bg-white text-black">
      <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 md:max-w-6xl lg:max-w-6xl lg:px-8 xl:max-w-7xl 2xl:max-w-7xl">
        <section className="flex gap-4 justify-between items-center">
          <Image className="w-1/3 sm:w-1/6" src="/logo.png" alt="Logo" width={1000} height={1000} />
          <div className="text-sm md:text-base">
            <p>The original and most dependable!!!!</p>
            <p>Mississippi Supply Company © 2026 </p>
          </div>
        </section>
      </div>
    </footer>
  );
}


