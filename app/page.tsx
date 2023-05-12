export default function Home() {
  return (
    <main className="flex min-h-screen place-items-center justify-center p-8 md:p-12 lg:p-16">
      <section className="flex flex-col gap-6 place-items-center">
        <h1 className="text-4xl font-bold text-center lg:text-5xl">
          Hi! This page is still under construction
        </h1>
        <h2 className="text-2xl text-center lg:text-3xl">
          Make sure to come back in a few days!
        </h2>
      </section>

      <div className="absolute right-6 bottom-6">
        <p className="text-gray-400 collapse 2xl:visible">
          Made with Next.js, Tailwind CSS, and TypeScript
        </p>
      </div>
    </main>
  );
}
