"use client";

import envelop from "@/assets/lock.svg";
import lock from "@/assets/ph_lock-key-fill.svg";
import { register } from "@/firebase";
import { cn } from "@/utils";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await register(email, password);
      router.push("/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <>
      {error && <div>erorr</div>}
      <div className="flex flex-col gap-[40px] md:p-[40px] md:bg-[#FFFFFF] text-[#333333]    rounded-2xl ">
        <div className="text-left flex flex-col gap-[8px]">
          <h2 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
            Create account
          </h2>
          <p className="text-[16px] text-[#737373] leading-[150%] ">
            Let’s get you started sharing your links!
          </p>
        </div>

        <form onSubmit={handleSubmit} action="">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="text"
                  placeholder="e.g. alex@email.com"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="">
                <span className="text-[#737373]">Create Password</span>
              </label>
              <br></br>

              <div className="relative flex items-center text-[#737373]">
                <Image
                  src={lock}
                  alt="icon"
                  className="absolute ml-3 pointer-events-none w-[16px]"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="text"
                  placeholder="At least 8 characters"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="">
                <span className="text-[#737373]">Confirm Password</span>
              </label>
              <br></br>

              <div className="relative flex items-center text-[#737373]">
                <Image
                  src={lock}
                  alt="icon"
                  className="absolute ml-3 pointer-events-none w-[16px]"
                />
                <input
                  className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="text"
                  placeholder="At least 8 characters"
                />
              </div>
            </div>

            <p className="text-[12px] text-[#737373]">
              Password must contain at least 8 characters
            </p>

            <button
              className={cn(
                "px-[11px] py-[16px] cursor-pointer  w-full text-white bg-[#251A1A] rounded-lg ",
                isLoading && "opacity-25"
              )}
            >
              Create new account
            </button>

            <p className="text-[16px] leading-[150%] text-center text-[#737373] ">
              Already have an account?{" "}
              <Link href="/">
                <span className="text-[#251A1A]">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Create;
