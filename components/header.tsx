import Image from "next/image";
import Link from "next/link";

const Logo = ({ infoPage }: { infoPage?: boolean }) => {
  return (
    <div className={`md:pt-24 ${infoPage ? "pt-24" : "pt-24"}`}>
      <Link href="/">
        <Image src="/Logo.svg" alt="logo" width={200} height={100} />
      </Link>
    </div>
  );
};

export default function Header({ infoPage }: { infoPage?: boolean }) {
  return (
    <header className="w-full max-sm:h-70 h-72 flex md:items-start justify-center md:bg-[url('/hero-image.jpg')] bg-[url('/hero-image-sm.jpg')] bg-cover md:bg-center bg-top bg-no-repeat">
      <Logo infoPage={infoPage} />
    </header>
  );
}
