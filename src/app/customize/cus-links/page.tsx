import click from "@/assets/click.svg";
import Image from "next/image";
import black from "@/assets/black.png";
import AddLink from "@/components/addlink";

const CusLinks = () => {
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
                <button className="px-[27px] py-[11px]  cursor-pointer  w-full text-[#633CFF] border-[#633CFF] border rounded-lg mb-[24px]  ">
                  + Add new link
                </button>

                <AddLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CusLinks;
