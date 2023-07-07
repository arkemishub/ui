import Image from "next/image";

function Footer() {
  return (
    <footer className="border-background-400 border-t-2 py-8">
      <div className="docs__content px-8">
        <div>
          <div className="flex items-center gap-8">
            <a href="https://www.mokkastudios.com" target="_blank">
              <Image src="/mokka.svg" alt="Mokka Logo" width={30} height={30} />
            </a>
            <a href="https://arkehub.com" target="_blank">
              <Image src="/arke.svg" alt="Arke Logo" width={100} height={28} />
            </a>
          </div>
          <p className="text-neutral mt-8 text-sm">
            @{new Date().getFullYear()} Arkemis S.r.l.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
