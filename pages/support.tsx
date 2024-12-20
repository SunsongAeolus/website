import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";

function Support() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-gray-900 py-24 px-6 text-gray-300 sm:py-32 lg:px-8">
        <div className="w-3/5 text-left text-gray-400">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Support
          </h1>

          <p className="mt-6 text-lg leading-7 ">
            If you need any help, please contact us by email at{" "}
          </p>

          <p className="mt-6 text-lg leading-7 underline">
            <Link href="mailto:support@sunsongaeolus.com">
              {" "}
              support@sunsongaeolus.com{" "}
            </Link>
          </p>

          <p className="mt-6 text-lg leading-7 ">
            Our support services are available Monday through Friday, 10 a.m. to
            5 p.m.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Support;
