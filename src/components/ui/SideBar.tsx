"use client";
import { SideBarItems } from "./SideBarItems";
import { SubSideBarItems } from "./subSideBarItems";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const botMenu = [
  {
    label: "Dashboard",
    icon: <Icon icon="mage:dashboard-plus-fill" width="16" height="16" />,
    href: "/dashboard",
  },
  {
    label: "Agent",
    icon: <Icon icon="mingcute:edit-2-fill" width="16" height="16" />,
    href: "/agent",
  },
  {
    label: "Bot Builder",
    icon: <Icon icon="tdesign:system-setting" width="16" height="16" />,
    href: "/bot-builder",
  },
  {
    label: "Integration",
    icon: (
      <Icon
        icon="material-symbols:integration-instructions"
        width="16"
        height="16"
      />
    ),
    href: "/integration",
  },
  {
    label: "AI & Analytic",
    icon: <Icon icon="ri:file-ai-fill" width="16" height="16" />,
    href: "/ai-analytic",
  },
];

const salesMenu = [
  {
    label: "Product Manager",
    icon: <Icon icon="ix:product" width="16" height="16" />,
    href: "/product-manager",
  },
  {
    label: "Payments",
    icon: (
      <Icon
        icon="material-symbols:payment-arrow-down-outline-rounded"
        width="16"
        height="16"
      />
    ),
    href: "/payment",
  },
  {
    label: "Sales Monitoring",
    icon: <Icon icon="grommet-icons:shop" width="16" height="16" />,
    href: "/sales-monitoring",
  },
  {
    label: "Customer",
    icon: <Icon icon="famicons:people" width="16" height="16" />,
    href: "/customer",
  },
];

const mainMenu = [
  {
    label: "Settings",
    icon: <Icon icon="material-symbols:settings" width="16" height="16" />,
    href: "/settings",
  },
  {
    label: "Notification",
    icon: <Icon icon="iconamoon:notification-fill" width="16" height="16" />,
    href: "/notification",
  },
];

const integrationSubMenu = [
  { labelSub: "Whatsapp", subHref: "/wa" },
  { labelSub: "Telegram", subHref: "/tele" },
  { labelSub: "Website", subHref: "/web" },
];

// Page
const SideBar = () => {
  const activePath = usePathname();
  const [openIntegration, setOpenIntregation] = useState(false);

  useEffect(() => {
    setOpenIntregation(activePath === "/integration");
  }, [activePath]);

  return (
    <div className="h-screen w-[276px] p-4 fixed bg-linear-to-t from-[#C4FAF2] to-20%">
      <div className="flex flex-col items-center text-[#01D2B3]">
        <Icon icon="garden:bot-sparkle-fill-12" width="50" height="50" />
        <h2 className="text-center mb-6 font-bold text-lg">NEXCHATBOT</h2>
      </div>
      <div>
        <h3 className="font-semibold ml-7 text-[#68626238]">BOT MENU</h3>
        {botMenu.map((item) => {
          if (item.href === "/integration") {

            return (
              <div key={item.href}>
                <SideBarItems
                  label={item.label}
                  href={item.href}
                  icon={item.icon}
                  toggle
                  isOpen={openIntegration}
                  active={activePath === "/integration"}
                  onToggle={() => setOpenIntregation(!openIntegration)}
                />
                {openIntegration && (
                  <div className="ml-8 flex flex-col gap-3.5">
                    {integrationSubMenu.map((sub) => (
                      <SubSideBarItems
                        key={sub.subHref}
                        labelSub={sub.labelSub}
                        subHref={sub.subHref}
                        active={activePath === sub.subHref}
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
              active={activePath.includes(item.href)}
             
            />
          );
        })}
      </div>
      {/* Sales Menu */}
      <div>
        <h3 className="font-semibold ml-7 text-[#68626238]">SALES MENU</h3>
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
      {/* Main Menu */}
      <div>
        <h3 className="font-semibold ml-7 text-[#68626238]">MAIN MENU</h3>
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
