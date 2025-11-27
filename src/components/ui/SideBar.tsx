"use client";
import { SideBarItems } from "./SideBarItems";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const botMenu = [
  {
    label: "Dashboard",
    icon: <Icon icon="mage:dashboard-plus-fill" width="24" height="24" />,
    href: "/dashboard",
  },
  {
    label: "Prompting",
    icon: <Icon icon="mdi:chat-outline" width="24" height="24" />,
    href: "/prompting",
  },
  {
    label: "Bot Builder",
    icon: <Icon icon="fluent:bot-add-32-filled" width="24" height="24" />,
    href: "/bot-builder",
  },
  {
    label: "Integration",
    icon: (
      <Icon
        icon="material-symbols:integration-instructions"
        width="24"
        height="24"
      />
    ),
    href: "/integration",
  },
  {
    label: "AI & Analytic",
    icon: <Icon icon="ri:file-ai-fill" width="24" height="24" />,
    href: "/ai-analytic",
  },
];

const salesMenu = [
  {
    label: "Product Manager",
    icon: <Icon icon="ix:product" width="24" height="24" />,
    href: "/product-manager",
  },
  {
    label: "Payments",
    icon: (
      <Icon
        icon="material-symbols:payment-arrow-down-outline-rounded"
        width="24"
        height="24"
      />
    ),
    href: "/payment",
  },
  {
    label: "Sales Monitoring",
    icon: <Icon icon="grommet-icons:shop" width="24" height="24" />,
    href: "/sales-monitoring",
  },
  {
    label: "Customer",
    icon: <Icon icon="famicons:people" width="24" height="24" />,
    href: "/customer",
  },
];

const mainMenu = [
  {
    label: "Settings",
    icon: <Icon icon="material-symbols:settings" width="24" height="24" />,
    href: "/settings",
  },
  {
    label: "Notification",
    icon: <Icon icon="iconamoon:notification-fill" width="24" height="24" />,
    href: "/notification",
  },
];

const integrationSubMenu = [
  { label: "Whatsapp", href: "/wa" },
  { label: "Telegram", href: "/tele" },
  { label: "Website", href: "/web" },
];

// Page
const SideBar = () => {
  const activePath = usePathname();
  const [openIntegration, setOpenIntregation] = useState(false);

  useEffect(() => {
    setOpenIntregation(activePath === "/Integration");
  }, [activePath]);

  return (
    <div className="h-screen w-64 p-4 overflow-y-scroll">
      <div className="flex flex-col items-center text-[#01D2B3]">
        <Icon icon="garden:bot-sparkle-fill-12" width="50" height="50" />
        <h2 className="text-center mb-6 font-bold text-lg">NEXCHATBOT</h2>
      </div>
      <div>
        <h3 className="font-bold text-[#655E5E]">Bot Menu</h3>
        {botMenu.map((item) => {
          if (item.label === "Integration") {
            return (
              <div key={item.href}>
                <SideBarItems
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  toggle
                  isOpen={openIntegration}
                  active={activePath === "/Integration"}
                  onToggle={() => setOpenIntregation(!openIntegration)}
                />
                {openIntegration && (
                  <div className="ml-8 flex flex-col">
                    {integrationSubMenu.map((sub) => (
                      <SideBarItems
                        key={sub.href}
                        label={sub.label}
                        href={sub.href}
                        active={activePath === sub.href}
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <SideBarItems
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
              active={activePath === item.href}
            />
          );
        })}
      </div>
      <div>
        <h3 className="font-bold text-[#655E5E]">Sales Menu</h3>
        {salesMenu.map((item) => (
          <SideBarItems
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
            active={activePath === item.href}
          />
        ))}
      </div>
      <div>
        <h3 className="font-bold text-[#655E5E]">Main Menu</h3>
        {mainMenu.map((item) => (
          <SideBarItems
            key={item.href}
            label={item.label}
            href={item.href}
            icon={item.icon}
            active={activePath === item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
