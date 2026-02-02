import React from "react";
import { Cards } from "@/src/components/ui/Cards";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/ui/Button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AgentList = () => {
  return (
    <div>
      <div className="agent-list grid gap-6 grid-cols-3 my-6">
        <Cards>
          <div className="headerAgentCard flex justify-between py-3 px-3.5 items-center">
            <p className="text-[16px] font-normal">Customer Services</p>
            <Icon icon="mingcute:more-2-line" width={24} />
          </div>
          <div className="AgentCardDescription p-2.5 mx-3.5 bg-gray-200 rounded-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            praesentium pariatur molestias cum assumenda quis voluptate ex
            asperiores consectetur adipisci.
          </div>
          <div className="agentAction flex justify-between py-3 px-3.5 items-center">
            <option className="p-1 bg-gray-100 rounded-lg">Claude</option>
            <Button
              moveTo="/agent/test-agent"
              label="Test"
              variant="custom"
              className="px-11 py-1 bg-[#A4F5A6] rounded-lg"
            />
          </div>
        </Cards>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export { AgentList };
