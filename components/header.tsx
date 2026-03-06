import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="pt-30">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={200} height={100} />
      </Link>
    </div>
  );
};

export default function Header() {
  return (
    <header>
      <div className="w-full h-[45vh] flex justify-center sm:bg-[url('/hero-image.jpg')] bg-[url('/hero-image-sm.jpg')]">
        {/* <p>header</p> */}
        <Logo />
      </div>
    </header>
  );
}
