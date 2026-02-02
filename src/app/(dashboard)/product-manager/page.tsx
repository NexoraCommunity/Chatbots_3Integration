import { Button } from "@/src/components/ui/Button";
import { SearchBar } from "@/src/components/ui/SearchBar";
import { Icon } from "@iconify/react";
import React from "react";

const page = () => {
  return (
    <div className="Add-agent mt-6 py-4 bg-white">
      <div className="flex justify-between items-center mx-9">
        <SearchBar
          placeholder="Search Products..."
          className="w-80"
          variant="secondary"
        />
        <div className="flex gap-5">
          <Button
            label="Filter"
            variant="custom"
            icon={<Icon icon="mdi:filter" width={20} />}
            iconPosition="left"
            className="flex gap-2.5 text-[16px] text-gray-500 rounded-lg border-4 border-[#575555] hover:border-[#01D2B3] py-3 px-10"
          />

          <Button
            label="Add Product"
            variant="custom"
            icon={<Icon icon="ic:baseline-plus" width={20} />}
            iconPosition="left"
            className="flex gap-2.5 text-[16px] bg-linear-to-r from-[#00D2B2] to-[#7cfce9] text-white justify-center px-10 py-3 rounded-lg"
          />
        </div>
      </div>
      <hr className="my-3.75"/>
    </div>
  );
};

export default page;
