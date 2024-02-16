import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-main max-h-[120px] bottom-0 h-24 w-full overflow-hidden relative">
      <Image src="/footer.png" alt="footer" fill />
    </footer>
  );
}
