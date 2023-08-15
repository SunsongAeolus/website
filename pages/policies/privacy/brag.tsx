import Header from "@/components/Header";

function privacy() {
  return (
    <>
      <Header />
      <main className="grid min-h-full place-items-center bg-gray-900 py-24 px-6 text-gray-400 sm:py-32 lg:px-8">
        <div className="text-left lg:w-3/5">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl">
            Privacy policy
          </h1>
          <p className="mt-6 text-base leading-7">Updated on 2023-08-15</p>
          <p className="mt-6 text-base leading-7">
            This app does not collect any data from you.
          </p>
        </div>
      </main>
    </>
  );
}

export default privacy;
