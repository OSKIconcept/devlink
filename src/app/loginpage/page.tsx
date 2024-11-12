import Login from "@/components/login";
import Image from "next/image";
import name from "@/assets/devlinks.svg";
import logo from "@/assets/logo.svg";

const LoginPage = () => {
  return (
    <div className="h-screen p-[32px]  md:bg-[#FAFAFA] ">
      <main className=" mx-auto justify-center  max-w-[476px]  ">
        <div className="flex flex-col gap-[64px] w-full ">
          <div className="flex gap-[7.5px] md:items-center md:justify-center">
            <Image src={logo} alt="name" className="w-[40px]" />
            <Image src={name} alt="name" className="w-[135px]" />
          </div>

          <Login />
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
