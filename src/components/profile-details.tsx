import Image from "next/image";
import pic_purple from "@/assets/pic_purple.svg";

export const ProfileDetails = () => {
  return (
    <div className="text-[#737373] text-[12px] md:text-[16px] gap-[24px] flex flex-col">
      <div className="bg-[#FAFAFA] rounded-xl p-[20px]">
        <div className="md:flex-row md:justify-between md:items-center flex-col flex  justify-start gap-[16px]">
          <p className="basis-1/3">Profile picture</p>

          <div className="rounded-xl bg-[#EFEBFF] w-[193px] h-[193px] p-[61px] flex flex-col items-center justify-center">
            <div className="flex flex-col gap-[8px] justify-center items-center">
              {" "}
              <Image src={pic_purple} alt="purple" className="w-[40px]" />
              <p className="text-[#633CFF] font-medium">+Upload Image</p>
            </div>
          </div>
          <p className="text-left  md:ml-[24px] basis-1/3 pt-[8px]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </div>

      <div className="bg-[#FAFAFA] rounded-xl p-[20px]">
        <div className="flex flex-col gap-[12px] w-full">
          <div className="md:flex-row flex flex-col  justify-start md:justify-between md:items-center gap-[4px]">
            <p>First name*</p>
            <input
              className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:border-[#633CFF] focus:shadow-inner md:w-2/3 w-full   "
              type="text"
              placeholder="e.g. John"
            />
          </div>

          <div className="md:flex-row flex flex-col  justify-start md:justify-between md:items-center gap-[4px]">
            <p>Last name*</p>
            <input
              className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:border-[#633CFF] focus:shadow-inner md:w-2/3 w-full   "
              type="text"
              placeholder="e.g. Appleseed"
            />
          </div>

          <div className="md:flex-row flex flex-col  justify-start md:justify-between md:items-center gap-[4px]">
            <p>Email</p>
            <input
              className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:border-[#633CFF] focus:shadow-inner md:w-2/3 w-full   "
              type="text"
              placeholder="e.g. email@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
