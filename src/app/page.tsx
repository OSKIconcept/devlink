import Link from "next/link";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="flex justify-center items-center mx-auto min-h-screen">
      <div className="mx-auto flex flex-col justify-center items-center  ">
        <h3 className="w-[300px] text-xl text-center font-medium">
          Welcome to DevLinks, <br></br>{" "}
          <small className="font-light text-sm">
            Please Navigate with the links below
          </small>
        </h3>

        <div className="mt-5 flex gap-3">
          <Link href="/create-account">
            {" "}
            <button className="text-white bg-blue-700 rounded-md py-2.5 px-6">
              Get Started
            </button>
          </Link>

          <Link href="/loginpage">
            {" "}
            <button className="text-white bg-blue-700 rounded-md py-2.5 px-6">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
