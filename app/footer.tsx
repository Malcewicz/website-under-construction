import Link from "next/link";

export default function Home() {
  return (
    <footer className="absolute bottom-0 p-6 w-full text-center">
      <Link
        href="https://github.com/Malcewicz"
        className="text-lg text-gray-400"
      >
        New page is currently being designed & built by Maciej Bernatowicz
      </Link>
    </footer>
  );
}
