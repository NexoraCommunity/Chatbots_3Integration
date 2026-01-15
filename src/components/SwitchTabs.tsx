"use client";
import { motion } from "framer-motion";

interface Props {
  active: "login" | "register";
  onChange: (tab: "login" | "register") => void;
}

function SwitchTabs({ active, onChange }: Props) {
  return (
    <div className="border border-gray-400 p-1 w-[400px] h-[60px] rounded-2xl flex relative">
      {["login", "register"].map((tab) => (
        <div
          key={tab}
          className="w-1/2 flex justify-center items-center relative cursor-pointer"
          onClick={() => onChange(tab as "login" | "register")}
        >
          {active === tab && (
            <motion.div
              layoutId="tabBg"
              className="absolute inset-0 rounded-2xl bg-linear-to-r from-[#01D2B3] to-[#69F6E1] shadow-lg/20"
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              initial={false}
              animate={{
                y: active === "login" ? "0%" : "0%",
              }}
            ></motion.div>
          )}

          <span
            className={`relative z-10 text-lg font-normal ${
              active === tab ? "text-white" : "text-[#01D2B3]"
            }`}
          >
            {tab === "login" ? "Login" : "Register"}
          </span>
        </div>
      ))}
    </div>
  );
}

export { SwitchTabs };
