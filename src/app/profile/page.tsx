import click from "@/assets/click.svg";
import Image from "next/image";
import coloured from "@/assets/coloured.png";
import AddLink from "@/components/addlink";
import LinkBar from "@/components/links";
import { ProfileDetails } from "@/components/profile-details";

const Profile = () => {
  return (
    <>
      <LinkBar />
      <div className="mx-auto max-w-[1392px] justify-center items-center">
        <div className="flex  items-start justify-center mx-auto ">
          <div className="hidden lg:block px-[126.5px] py-[101.5px] mx-auto w-[560px] ">
            <Image src={coloured} alt="preview" className="" />
          </div>

          <div className="flex-1">
            <div className=" mx-auto justify-center items-start bg-white rounded-t-xl border-b border-[#D9D9D9] pb-[24px] pt-[24px] px-[24px] lg:pt-[40x] lg:px-[40px]">
              <div className="flex flex-col gap-[40px]">
                <div className="gap-[8px] flex flex-col text-start  ">
                  <h3 className="text-[24px] md:text-[32px] font-bold pb-[8px]">
                    Profile Details
                  </h3>
                  <p className="text-[16px] text-[#737373] leading-[150%] ">
                    Add your details to create a personal touch to your profile.
                  </p>
                </div>

                <ProfileDetails />
              </div>
            </div>

            <div className="  md:justify-end flex px-[40px] pt-[20%]">
              <button className="disabled:bg-[#EFEBFF] disabled:text-opacity-50 px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg mt-[40px]  md:w-[91px]  ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
