import envelop from "@/assets/lock.svg";
import lock from "@/assets/ph_lock-key-fill.svg";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="flex flex-col gap-[40px] md:p-[40px] md:bg-[#FFFFFF] text-[#333333]    rounded-lg ">
        <div className="text-left flex flex-col gap-[8px]">
          <h2 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
            Login
          </h2>
          <p className="text-[16px] text-[#737373] leading-[150%] ">
            Add your details below to get back into the app
          </p>
        </div>

        <form action="">
          <div className=" gap-[24px] flex flex-col w-full ">
            <div>
              <label htmlFor="">
                <span className="text-[#737373]">Email address</span>
              </label>
              <br></br>
              <div className="relative flex items-center text-[#737373]">
                <Image
                  src={envelop}
                  alt="icon"
                  className="absolute ml-3 pointer-events-none w-[16px]"
                />
                <input
                  className="px-[12px] py-[16px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="text"
                  placeholder="e.g. alex@email.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="">
                <span className="text-[#737373]">Password</span>
              </label>
              <br></br>

              <div className="relative flex items-center text-[#737373]">
                <Image
                  src={lock}
                  alt="icon"
                  className="absolute ml-3 pointer-events-none w-[16px]"
                />
                <input
                  className="px-[12px] py-[16px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="text"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button className="px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg ">
              Login
            </button>

            <p className="text-[16px] leading-[150%] text-center text-[#737373] ">
              Don’t have an account?{" "}
              <Link href="/create-account">
                <span className="text-[#633CFF]">Create account</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
