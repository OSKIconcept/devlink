"use client";

import click from "@/assets/click.svg";
import Image from "next/image";
import black from "@/assets/black.png";
import AddLink from "@/components/addlink";
import { useState } from "react";
import Link from "next/link";

const CusLinks = () => {
  const [showLink, setShowLink] = useState(false);
  const [newLinks, setNewLinks] = useState<number[]>([]);

  function handleClick() {
    setShowLink(true);
    if (newLinks.length < 2) {
      setNewLinks((links) => [...links, links.length + 1]);
    } else return;
  }

  return (
    <div className=" mx-auto max-w-[1392px] justify-center items-center">
      <div className="flex  items-start justify-center mx-auto ">
        <div className="hidden lg:block px-[126.5px] py-[101.5px] mx-auto max-w-[560px] ">
          <Image src={black} alt="preview" className="" />
        </div>

        <div className="flex-1">
          <div className=" mx-auto justify-center items-start bg-white rounded-t-xl border-b border-[#D9D9D9] pb-[24px] pt-[24px] px-[24px] lg:pt-[40x] lg:px-[40px]">
            <div className="flex flex-col gap-[40px]">
              <div className="gap-[8px] flex flex-col text-start  ">
                <h3 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
                  Customize your links
                </h3>
                <p className="text-[16px] text-[#737373] leading-[150%] ">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </p>
              </div>

              <div>
                <button
                  onClick={handleClick}
                  className="px-[27px] py-[11px]  cursor-pointer  w-full text-[#633CFF] border-[#633CFF] border rounded-lg mb-[24px] hover:text-white hover:bg-[#633CFF] ease-in-out duration-500  "
                >
                  + Add new link
                </button>

                {showLink && (
                  <>
                    <div>
                      {" "}
                      {newLinks.map((index) => (
                        <AddLink key={index} />
                      ))}
                    </div>

                    <div className="pt-[60px]  md:justify-end flex px-[40px]">
                      <Link href="/profile">
                        <button className="disabled:bg-[#EFEBFF] disabled:text-opacity-50 px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg   md:w-[91px]  ">
                          Save
                        </button>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusLinks;
