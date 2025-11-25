"use client";
import { SideBarItems } from "./SideBarItems";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const sideBarData = [
  {
    label: "Dashboard",
    icon: <Icon icon="mage:dashboard-plus-fill" width="20" height="20" />,
    href: "/dashboard",
  },
  {
    label: "Prompting",
    icon: <Icon icon="mdi:chat-outline" width="20" height="20" />,
    href: "/prompting",
  },
  {
    label: "Bot Builder",
    icon: <Icon icon="fluent:bot-add-32-filled" width="20" height="20" />,
    href: "/bot-builder",
  },
  {
    label: "Integration",
    icon: (
      <Icon
        icon="material-symbols:integration-instructions"
        width="20"
        height="20"
      />
    ),
    href: "/integration",
  },
  {
    label: "Product Manager",
    icon: <Icon icon="ix:product" />,
    href: "/product-manager",
  },
  {
    label: "Payments",
    icon: <Icon icon="material-symbols:payment-arrow-down-outline-rounded" />,
    href: "/payment",
  },
  {
    label: "Sales Monitoring",
    icon: <Icon icon="grommet-icons:shop" />,
    href: "/sales-monitoring",
  },
  {
    label: "Customer",
    icon: <Icon icon="famicons:people" />,
    href: "/customer",
  },
  {
    label: "Settings",
    icon: <Icon icon="material-symbols:settings" />,
    href: "/settings",
  },
  {
    label: "Notification",
    icon: <Icon icon="iconamoon:notification-fill" />,
    href: "/notification",
  },
];

const SideBar = () => {
  const activePath = usePathname();

  return (
    <div className="h-screen w-64 p-4">
      <h2 className="text-center mb-6 font-bold text-lg text-[#01D2B3]">
        NEXCHATBOT
      </h2>
      {sideBarData.map((item) => (
        <SideBarItems
          key={item.href}
          label={item.label}
          href={item.href}
          icon={item.icon}
          active={activePath === item.href}
        />
      ))}
    </div>
  );
};

export default SideBar;
