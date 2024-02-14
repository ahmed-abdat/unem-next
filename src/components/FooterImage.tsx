import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-main max-h-[60px] bottom-0 h-16 w-full overflow-hidden relative">
      <Image src='/footer.png' alt="footer" fill />
    </footer>
  );
}
