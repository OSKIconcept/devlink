import click from "@/assets/click.svg";
import Image from "next/image";
import preview from "@/assets/preview-section.png";
import Link from "next/link";

const Customize = () => {
  return (
    <div className="mx-auto max-w-[1392px] justify-center items-center">
      <div className="flex  items-start justify-center mx-auto ">
        <div className="hidden lg:block px-[126.5px] py-[101.5px] mx-auto max-w-[560px]">
          <Image src={preview} alt="preview" className="w-[307px]" />
        </div>

        <div className="flex-1">
          <div className="  mx-auto justify-center items-start bg-white rounded-t-xl border-b border-[#D9D9D9] pb-[24px] pt-[24px] px-[24px] lg:pt-[40x] lg:px-[40px]">
            <div className="flex flex-col gap-[40px]">
              <div className="gap-[8px] flex flex-col text-start ">
                <h3 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
                  Customize your links
                </h3>
                <p className="text-[16px] text-[#737373] leading-[150%] ">
                  Add/edit/remove links below and then share all your profiles
                  with the world!
                </p>
              </div>

              <Link href="/customize/cus-links">
                <button className="px-[27px] py-[11px]  cursor-pointer  w-full text-[#633CFF] border-[#633CFF] border rounded-lg  ">
                  + Add new link
                </button>
              </Link>

              <div className="bg-[#FAFAFA] mt-[24px] rounded-xl ">
                <div className="px-[20px] py-[46.5px] flex flex-col gap-[24px] items-center justify-center text-center ">
                  <Image src={click} alt="click" className="w-[124.77px]" />
                  <h3 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
                    Let&apos;s get you started
                  </h3>

                  <p className="text-justify md:text-center text-[#737373] w-[80%]">
                    Use the “Add new link” button to get started. Once you have
                    more than one link, you can reorder and edit them. We’re
                    here to help you share your profiles with everyone!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:justify-end flex px-[40px] mt-[17px]">
            <button
              //disabled="true"
              className="disabled:bg-[#EFEBFF]  px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg mt-[40px]  md:w-[91px]  "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
