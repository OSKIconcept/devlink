import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";

const loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <Image src={logo} alt="" className="w-[20px] md:w-[32px] animate-pulse" />
    </div>
  );
};

export default loading;
