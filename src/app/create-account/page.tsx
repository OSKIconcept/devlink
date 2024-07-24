import Image from "next/image";
import name from "@/assets/devlinks.svg";
import logo from "@/assets/logo.svg";

import Create from "@/components/create";

export default function Home() {
  return (
    <div className="h-screen p-[32px]  md:bg-[#FAFAFA] ">
      <main className=" mx-auto justify-center  max-w-[476px]  ">
        <div className="flex flex-col gap-[64px] w-full ">
          <div className="flex gap-[7.5px] md:items-center md:justify-center text-[#333]">
            <Image
              src={logo}
              alt="name"
              className="w-[40px] stroke-orange-500"
            />
            <Image src={name} alt="name" className="w-[135px] " />
          </div>

          <Create />
        </div>
      </main>
    </div>
  );
}
