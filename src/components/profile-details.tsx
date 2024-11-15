"use client";
import Changes from "./changesmade";
import Image from "next/image";
import pic_purple from "@/assets/pic_purple.svg";
import app from "@/firebase";
import { collection, addDoc, doc } from "firebase/firestore";
import { use, useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";
import { cn } from "@/utils";
// import { storage } from "@/firebase";

import { CldImage } from "next-cloudinary";

export const ProfileDetails = () => {
  const [fname, setFname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  //save file and show preview
  const [file, setFile] = useState<File | undefined>();

  // const addPost = async () => {
  //   setIsLoading(true);
  //   const db = getDatabase(app);
  //   const newDocRef = push(ref(db, "profile-details"));
  //   set(newDocRef, {
  //     firstname: fname,
  //     lastname: name,
  //     email: email,
  //   })
  //     .then(() => {
  //       setIsLoading(false);
  //       setTimeout(() => {
  //         setShowComponent(true);
  //       }, 3000);
  //       setEmail("");
  //       setName("");
  //       setFname("");
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // };

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };

    setFile(target.files[0]);
    if (typeof file === undefined) return;

    console.log("file", file);
  }

  // const timeout = setTimeout(() => {
  //   <Changes>{"Added successfully"}</Changes>;
  // }, 3000);  1`

  return (
    <div className="text-[#737373] text-[12px] md:text-[16px] gap-[24px] flex flex-col">
      <div className="bg-[#FAFAFA] rounded-xl p-[20px]">
        <div className="md:flex-row md:justify-between md:items-center flex-col flex  justify-start gap-[16px]">
          <p className="basis-1/3">Profile picture</p>

          <div className="relative w-[193px] h-[193px]">
            {file ? (
              <Image src={pic_purple} alt="image" />
            ) : (
              <div>
                <input
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                  type="file"
                  className="cursor-pointer rounded-xl bg-[#EFEBFF] w-[193px] h-[193px] absolute z-[10] top-0 left-0 opacity-0 "
                  placeholder="yes"
                />
                <div className="rounded-xl bg-[#EFEBFF] w-[193px] h-[193px] p-[61px] flex items-center justify-center">
                  <div className="w-[116px] flex flex-col gap-[8px] justify-center items-center">
                    {" "}
                    <Image src={pic_purple} alt="purple" className="w-[40px]" />
                    <p className="text-[#633CFF] font-medium">+Upload pic</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="text-left  md:ml-[24px] basis-1/3 pt-[8px]">
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </div>

      <form className="bg-[#FAFAFA] rounded-xl p-[20px]">
        <div className="flex flex-col gap-[12px] w-full">
          <div className="md:flex-row flex flex-col  justify-start md:justify-between md:items-center gap-[4px]">
            <p>First name*</p>
            <input
              className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:border-[#633CFF] focus:shadow-inner md:w-2/3 w-full   "
              type="text"
              placeholder="e.g. John"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="md:flex-row flex flex-col  justify-start md:justify-between md:items-center gap-[4px]">
            <p>Last name*</p>
            <input
              className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:border-[#633CFF] focus:shadow-inner md:w-2/3 w-full   "
              type="text"
              placeholder="e.g Appleseed"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="md:flex-row flex flex-col  justify-start md:justify-between md:items-center gap-[4px]">
            <p>Email</p>
            <input
              className="px-[16px] py-[12px] border border-[#D9D9D9] rounded-lg focus:outline-none focus:border-[#633CFF] focus:shadow-inner md:w-2/3 w-full   "
              type="text"
              placeholder="e.g. email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div className=" flex flex-col gap-3 items-end">
        <div className="  md:justify-end flex pt-[60px]">
          <button
            // onClick={addPost}
            className={cn(
              "disabled:bg-[#EFEBFF] disabled:text-opacity-50 px-[27px] py-[11px] cursor-pointer  w-full text-white bg-[#633CFF] rounded-lg mt-[40px]  md:w-[91px]",
              isLoading && "opacity-25"
            )}
          >
            Save
          </button>
        </div>

        <div className="">
          {showComponent && (
            <Changes>{"Your changes have been successfully saved!"}</Changes>
          )}
        </div>
      </div>
    </div>
  );
};
