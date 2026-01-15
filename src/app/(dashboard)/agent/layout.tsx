"use client";

import { Button } from "@/src/components/ui/Button";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

export default function PromptingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div>
      <div className="buttonOption flex gap-4">
        <Button
          label="Agent List"
          moveTo="/agent"
          variant={pathname === "/agent" ? "primary" : "secondary"}
          icon={<Icon icon="mingcute:edit-2-fill" width={20} />}
          iconPosition="left"
          className="gap-2.5 px-9"
        />
        <Button
          label="Add Prompt"
          moveTo="/agent/add-agent"
          variant={
            pathname === "/agent/add-agent" ? "primary" : "secondary"
          }
          icon={<Icon icon="mdi:plus" width={20} />}
          iconPosition="left"
          className="gap-2.5 px-9"
        />
      </div>
      {children}
    </div>
  );
}
