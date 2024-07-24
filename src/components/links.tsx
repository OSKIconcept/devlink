import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.svg";
import link from "@/assets/link.svg";
import eye from "@/assets/eye.svg";
import devlink from "@/assets/devlinks.svg";

import user from "@/assets/user.svg";

const LinkBar = () => {
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
          <div className="px-[27px] py-[11px] bg-[#EFEBFF] rounded-lg cursor-pointer flex">
            <Image src={link} alt="" />
            <p className="hidden md:block ">Links</p>
          </div>

          <div className="px-[27px] py-[11px] flex gap-[8px]">
            <Image src={user} alt="" />
            <p className="hidden md:block ">Profile details</p>
          </div>
        </div>

        <div className="py-[11px] px-[16px] border border-[#633CFF] rounded-lg">
          <Image src={eye} alt="" className="block md:hidden" />
          <p className="hidden md:block ">Preview</p>
        </div>
      </div>
    </div>
  );
};

export default LinkBar;
