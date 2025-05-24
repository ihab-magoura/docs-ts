import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="gap-3 flex items-center shrink-0 pr-6 ">
        <Link href={"/"} />
        <Image src={"/logo.svg"} alt="Logo" width={36} height={36} />
        <h3 className="text-xl">Live Docs</h3>
      </div>
    </nav>
  );
};
