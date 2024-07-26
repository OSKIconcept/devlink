import file from "@/assets/file.svg";

import Image from "next/image";

const Changes = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" px-[24px] py-[16px] bg-[#333333] rounded-xl text-white">
      <div className="gap-[8px] flex justify-center items-center">
        <Image src={file} alt="file" />
        {children}
      </div>
    </div>
  );
};

export default Changes;
