"use client";

import envelop from "@/assets/lock.svg";
import lock from "@/assets/ph_lock-key-fill.svg";
import { reg } from "@/firebase";
import { signUpSchema, TsignUpSchema } from "@/lib/types";

import { cn } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
8;

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const Create = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TsignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const router = useRouter();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     await register(email, password);
  //     router.push("/");
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };

  const onSubmit = async (data: TsignUpSchema) => {
    try {
      await reg(data.email, data.password);
      router.push("/loginpage");
    } catch (err: any) {
      setErrorMessage(err.code);
    }

    const res = await fetch("api/create", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();

    console.log(result);

    if (!res.ok) {
      alert("Submitting form failed");

      return;
    }

    if (result.errors) {
      const errors = result.errors;

      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else {
        alert("Something went swrong");
      }
    }

    reset();
  };

  return (
    <>
      <div className="flex flex-col gap-[40px] md:p-[40px] md:bg-[#FFFFFF] text-[#333333]    rounded-2xl ">
        <div className="text-left flex flex-col gap-[8px]">
          <h2 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
            Create account
          </h2>
          <p className="text-[16px] text-[#737373] leading-[150%] ">
            Let’s get you started sharing your links!
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} action="">
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
                  className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
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
                  {...register("password")}
                  className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="password"
                  placeholder="At least 8 characters"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 tracking-wide text-[12px] pt-1.5">{`${errors.password.message}`}</p>
              )}
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
                  {...register("confirmPassword")}
                  className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-4xl pr-3 pl-9 "
                  type="password"
                  placeholder="At least 8 characters"
                />
              </div>

              {errors.confirmPassword && (
                <p className="text-red-500 tracking-wide text-[12px] pt-1.5">{`${errors.confirmPassword.message}`}</p>
              )}
            </div>

            <p className="text-[12px] text-[#737373]">
              Password must contain at least 8 characters
            </p>

            <button
              disabled={isSubmitting}
              className={cn(
                "px-[11px] py-[16px] cursor-pointer  w-full text-white bg-[#251A1A] rounded-lg ",
                isSubmitting && "opacity-25"
              )}
            >
              {isSubmitting ? "Creating Account" : "Create New Account"}
            </button>

            {errorMessage && (
              <div className="text-red-600 text-sm font-bold">
                {errorMessage}
              </div>
            )}

            {errors.root && (
              <p className="text-red-500">{`${errors.root.message}`}</p>
            )}

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
