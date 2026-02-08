"use client";
import { Button } from "@/src/components/ui/Button";
import { Input } from "@/src/components/ui/Input";
import { useRouter } from "next/navigation";
import { SwitchTabs } from "@/src/components/SwitchTabs";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { RegisterProps } from "@/src/model/authentication.model";
import { useAuthStore } from "@/src/store/auth.store";

const Page = () => {
  const router = useRouter();
  const { register, isLoading } = useAuthStore();
  const [error, setError] = useState();
  const [dataRegister, setDataRegister] = useState<RegisterProps>({ firstName: '', lastName: '', email: '', password: '' });

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await register(dataRegister);
      if (response) {
        console.log(response)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex w-full h-screen items-center overflow-hidden">
      {/* left side */}
      <div className="flex flex-col items-center w-1/2 p-20">
        <h3 className="text-[#525252] text-4xl font-bold my-5">
          Welcome !!
        </h3>

        <div className="w-full h-1/2 flex flex-col justify-center items-center gap-5">
          <SwitchTabs
            active="register"
            onChange={(tab) => {
              router.push(`/${tab}`);
            }}
          />

          {/* form */}
          <form action="" onSubmit={handleOnSubmit}>
            <div className="w-100 h-auto flex flex-col justify-center items-center gap-2 p-4 bg-[#F4FFFD] border rounded-xl border-[#DBD5D5] text-[#575555]">
              <div>
                <p className="text-xs ml-2 mb-1.5">
                  Masukan nama anda
                </p>
                <div className="flex gap-2">
                  <Input
                    placeholder="First Name"
                    type="text"
                    variant="secondary"
                    onChange={(e) => setDataRegister({ ...dataRegister, firstName: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Last Name"
                    type="text"
                    variant="secondary"
                    onChange={(e) => setDataRegister({ ...dataRegister, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-xs ml-2 mb-1.5">
                  Masukan email anda
                </p>
                <Input
                  placeholder="Email address"
                  type="email"
                  variant="secondary"
                  onChange={(e) => setDataRegister({ ...dataRegister, email: e.target.value })}
                  required
                />
              </div>
              <div className="w-full">
                <p className="text-xs ml-2 mb-1.5">
                  Masukan password anda
                </p>
                <Input
                  placeholder="Password"
                  type="password"
                  variant="secondary"
                  onChange={(e) => setDataRegister({ ...dataRegister, password: e.target.value })}
                  required
                />
              </div>
              <div className="w-full">
                <p className="text-xs ml-2 mb-1.5">
                  Masukan ulang password anda
                </p>
                <Input
                  placeholder="Confirm Password"
                  type="password"
                  variant="secondary"
                />
              </div>
            </div>

            <div className="mt-5">
              <Button label="Continue" variant="primary" fullWidth />
            </div>
          </form>
          {/* Another Login */}
          <div className="flex flex-col items-center gap-3">
            <p className="flex items-center gap-2 text-xs font-medium text-black">
              <span className="w-34 h-px bg-black"></span>
              or continue with
              <span className="w-34 h-px bg-black"></span>
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
                <Icon icon="bxl:facebook" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="w-1/2 h-full bg-[#01D2B3]"></div>
    </div>
  );
};

export default Page;
