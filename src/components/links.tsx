"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import link from "@/assets/link.svg";
import eye from "@/assets/eye.svg";
import devlink from "@/assets/devlinks.svg";

import user from "@/assets/user.svg";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkBar = () => {
  const [active, setActive] = useState("b1");

  const pathname = usePathname();

  return (
    <div className="py-[16px] md:my-[24px] md:rounded-[12px]  ">
      <div className=" gap-[41.5px] md:gap-[55px] flex mx-auto justify-between items-center bg-white  pr-[16px] pl-[24px] max-w-[1352px] rounded-xl">
        <div className="flex  gap-[6px]">
          <Image src={logo} alt="" className="w-[32px]" />
          <Image
            src={devlink}
            alt=""
            className=" hidden md:block md:w-[108px] "
          />
        </div>

        <div className="flex pl-[20px]">
          <Link
            href="/customize/cus-links"
            className={`link ${
              pathname === "/customize/cus-links" &&
              "text-[#633CFF] bg-[#EFEBFF] rounded-lg"
            }`}
          >
            <div
              onClick={() => setActive("b1")}
              className={cn(
                " px-[27px] py-[11px] rounded-lg cursor-pointer flex items-center justify-center gap-[8px]",
                active === "b1" && " "
              )}
            >
              <Image src={link} alt="" />
              <p className="hidden md:block ">Links</p>
            </div>
          </Link>

          <Link
            href="/profile"
            className={`link ${
              pathname === "/profile" &&
              "rounded-lg text-[#633CFF] bg-[#EFEBFF]"
            }`}
          >
            <div
              onClick={() => setActive("b2")}
              className={cn(
                "px-[27px] py-[11px] flex gap-[8px] cursor-pointer items-center justify-center ",
                active === "b2" && " border rounded-lg "
              )}
            >
              <Image src={user} alt="" />
              <p className="hidden md:block ">Profile details</p>
            </div>
          </Link>
        </div>

        <div className="hover:bg-[#633CFF] hover:text-white ease-in-out duration-500 py-[11px] px-[16px] border border-[#633CFF] rounded-lg ">
          <Image src={eye} alt="" className="block md:hidden " />
          <p className="hidden md:block ">Preview</p>
        </div>
      </div>
    </div>
  );
};

export default LinkBar;
