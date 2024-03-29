import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function notFound() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-gray-900 py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-3xl font-semibold text-blue-600 sm:text-5xl">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
