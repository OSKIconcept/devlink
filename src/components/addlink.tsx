"use client";

import Image from "next/image";
import github from "@/assets/guthub.svg";
import vect from "@/assets/Vector 1.svg";
import lin from "@/assets/ph_link-bold.svg";
import { useState } from "react";
import vec from "@/assets/vector.svg";

import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { platform } from "os";
import Link from "next/link";

const AddLink = () => {
  const [drop, setDrop] = useState(false);

  const addPost = async (formData: any) => {
    const collectionRef = collection(db, "posts");

    addDoc(collectionRef, {
      platform: formData.get("title"),
    });
  };
  return (
    <>
      <div className="bg-[#FAFAFA] mt-[24px] rounded-xl p-[20px] ">
        <div className="flex flex-col gap-[12px] text-[#737373] text-[16px]">
          <div className="flex justify-between">
            <div className="font-bold">= Link #251A1A</div>
            <p>Remove</p>
          </div>

          <div className="">
            <p className="text-[12px] font-bold pb-[4px]">Platform</p>
            <div
              // onClick={() => setDrop((drop) => !drop)}
              className="w-full bg-white px-[16px] py-[12px] rounded-lg border-[#D9D9D9] border"
            >
              <div className="flex justify-between items-center cursor-pointer">
                <div className="flex gap-[12px]">
                  <Image src={github} alt="github" />

                  <p>Github</p>
                </div>
                {/* dropdown */}

                {drop ? (
                  <Image
                    src={vec}
                    alt="vector"
                    className="w-[12px] cursor-pointer"
                  />
                ) : (
                  <Image
                    src={vect}
                    alt="vector"
                    className="w-[12px] cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-[12px] font-bold pb-[4px]">Link</p>
            <div className="relative flex items-center text-[#737373]">
              <Image
                src={lin}
                alt="icon"
                className="absolute ml-3 pointer-events-none w-[16px]"
              />
              <input
                className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg w-full focus:outline-none focus:border-[#633CFF] focus:shadow-inner pr-3 pl-9  "
                type="text"
                placeholder="e.g. https://www.github.com/johnappleseed"
              />
            </div>
          </div>
        </div>
      </div>

      <Link href="/profile">
        <div className="  md:justify-end flex px-[40px] pt-[20%]">
          <button className="disabled:bg-[#EFEBFF] disabled:text-opacity-50 px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg mt-[40px]  md:w-[91px]  ">
            Save
          </button>
        </div>
      </Link>
    </>
  );
};

export default AddLink;
