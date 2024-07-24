"use client";

import envelop from "@/assets/lock.svg";
import lock from "@/assets/ph_lock-key-fill.svg";
import { login, register } from "@/firebase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Submit = {
  handleSubmit: () => void;
};

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   const data = {
  //     email,
  //     password,
  //   };

  //   const res = await fetch("api", {
  //     method: "POST",
  //     headers: { "content-Type": "login/json" },
  //     body: JSON.stringify(data),
  //   });

  //   if (res.status === 201) {
  //     router.refresh();
  //     // router.push("/cr");
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push("/customize");
    } catch (err) {
      setError(err.code);
    }
  };

  return (
    <>
      {error && <div>Error</div>}
      <div className="flex flex-col gap-[40px] md:p-[40px] md:bg-[#FFFFFF] text-[#333333]    rounded-lg ">
        <div className="text-left flex flex-col gap-[8px]">
          <h2 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
            Login
          </h2>
          <p className="text-[16px] text-[#737373] leading-[150%] ">
            Add your details below to get back into the app
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-[12px] py-[16px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="text"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              disabled={isLoading}
              className="px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg "
            >
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
