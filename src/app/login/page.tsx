"use client";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { useRouter } from "next/navigation";
import { SwitchTabs } from "@/src/components/SwitchTabs";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Page = () => {
  const router = useRouter();

  return (
    <div className="flex w-full h-screen items-center overflow-hidden">
      {/* left side */}
      <div className="flex flex-col items-center w-1/2 p-20">
        <h3 className="text-[#525252] text-4xl font-bold my-5">
          Welcome Back!!
        </h3>

        <div className="w-full h-1/2 flex flex-col justify-center items-center gap-5">
          <SwitchTabs
            active="login"
            onChange={(tab) => {
              router.push(`/${tab}`);
            }}
          />

          {/* form */}
          <form action="">
            <div className="w-100 h-auto font-medium flex flex-col justify-center items-center gap-2 p-5 bg-[#F4FFFD] border rounded-xl border-[#DBD5D5] text-[#575555]">
              <div className="w-full">
                <p className="text-sm ml-2 mb-1.5 ">Email Address</p>
                <Input
                  placeholder="Masukan Email address"
                  type="email"
                  variant="secondary"
                  required
                />
              </div>
              <div className="w-full relative">
                <p className="text-sm ml-2 mb-1.5">Password</p>
                <Input
                  placeholder="Masukan Password"
                  type="password"
                  variant="secondary"
                />
                <div className="absolute right-0 flex items-center justify-center h-12 bottom-0">

                <Icon
                    icon="mdi:eye"
                    width={25}
                    className="mr-5 text-[#575555] cursor-pointer"
                  />
                </div>
              </div>
              <div className="mt-2 text-[#01D2B3] text-sm  cursor-pointer">
                <p>Lupa Password?</p>
              </div>
            </div>
            <div className="mt-5">
              <Button label="Continue" variant="primary" fullWidth />
            </div>
          </form>

          {/* Another Login */}
          <div className="flex flex-col items-center gap-3">
            <p className="flex items-center gap-2 text-xs font-medium text-black w-full">
              <span className="w-34 border-t border-black"></span>
              or continue with
              <span className="w-34 border-t border-black"></span>
            </p>

            <div className="flex gap-5">
              <div className="w-10 h-10 border border-gray-300 rounded-full flex justify-center items-center cursor-pointer">
                <Icon
                  icon="material-icon-theme:google"
                  width="20"
                  height="20"
                />
              </div>
              {/* <div className="w-10 h-10 text-xl text-white bg-[#1877F2] rounded-full flex justify-center items-center cursor-pointer">
                <Icon 
                onClick={handleClickFb} 
                icon="bxl:facebook" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="w-1/2 h-screen bg-[#01D2B3] p-5">
        <div className="foto w-full h-full relative rounded-lg overflow-hidden">
          <Image
            src={"/images/authentication.jpg"}
            alt="Login Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
