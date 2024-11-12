"use client";

import envelop from "@/assets/lock.svg";
import lock from "@/assets/ph_lock-key-fill.svg";
import { login } from "@/firebase";

import { cn } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type TsignInSchema = z.infer<typeof signInSchema>;

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Atleast 8 characters"),
});

const Login = () => {
  // const [reveal, setReveal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignInSchema>({
    resolver: zodResolver(signInSchema),
  });

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

  const onSubmit = async (data: TsignInSchema) => {
    try {
      await login(data.email, data.password);
      router.push("/customize");
    } catch (err: any) {
      // console.log("err", err);
      setErrorMessage(err.code);
    }

    // const res = await fetch("api/login", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const result = await res.json();

    // console.log(result);

    // if (!res.ok) {
    //   alert("Submitting form failed");

    //   return;
    // }

    // if (result.errors) {
    //   const errors = result.errors;

    //   if (errors.email) {
    //     setError("email", {
    //       type: "server",
    //       message: errors.email,
    //     });
    //   } else if (errors.password) {
    //     setError("password", {
    //       type: "server",
    //       message: errors.password,
    //     });
    //   } else {
    //     alert("Something went swrong");
    //   }
    // }

    reset();
  };

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

        <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("email")}
                  className="px-[12px] py-[16px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="text"
                  placeholder="e.g. alex@email.com"
                />
              </div>

              {errors.email && (
                <p className="text-red-500 tracking-wide text-[12px] pt-1.5">{`${errors.email.message}`}</p>
              )}
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
                  {...register("password")}
                  className="px-[12px] py-[16px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  // type={reveal ? "text" : "password"}
                  type="password"
                  placeholder="Enter your password"
                />

                {/* <p
                  className="absolute   pointer-events-none"
                  onClick={() => setReveal(!reveal)}
                >
                  yes
                </p> */}
              </div>

              {errors.password && (
                <p className="text-red-500 tracking-wide text-[12px] pt-1.5">{`${errors.password.message}`}</p>
              )}
            </div>

            <button
              disabled={isSubmitting}
              className={cn(
                "px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg ",
                isSubmitting && "opacity-25"
              )}
            >
              {isSubmitting ? "Logging In..." : "Login"}
            </button>

            {errorMessage && (
              <div className="text-red-600 text-sm font-bold">
                {errorMessage}
              </div>
            )}

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
