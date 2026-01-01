import { useState } from "react";

type MenuItem = {
  id: string;
  title: string;
} & (
  | { type: "link"; href: string } // Regular link
  | { type: "dropdown"; content: React.ReactNode }
); // Click to open

export const Menu = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const menuItems: MenuItem[] = [
    {
      id: "platform",
      type: "dropdown",
      title: "Platform",
      content: (
      <ul className="space-y-4 ">
  <li><a href="#">HYPR Identity Assurance Platform</a></li>
  <li><a href="#">HYPR Authenticate: Passwordless MFA</a></li>
  <li><a href="#">HYPR Adapt: Risk Policy & Orchestration</a></li>
  <li><a href="#">HYPR Affirm: Identity Verification</a></li>
  <li><a href="#">Entra ID (Azure)</a></li>
  <li><a href="#">Okta</a></li>
  <li><a href="#">Ping</a></li>
  <li><a href="#">CrowdStrike</a></li>
  <li><a href="#">Idemia</a></li>
  <li><a href="#">Workday</a></li>
  <li><a href="#">Yubico</a></li>
  <li><a href="#">SSH & Linux</a></li>
  <li><a href="#">ForgeRock</a></li>
  <li><a href="#">HID</a></li>
  <li><a href="#">Citrix</a></li>
  <li><a href="#">OneLogin</a></li>
  <li><a href="#">See All Integrations</a></li>
  <li><a href="#">HYPR Enterprise Passkeys</a></li>
</ul>
      ),
    },
    { id: "solutions", type: "dropdown", title: "Solutions", content: <ul className="space-y-4">
  <li><a href="#">Financial Services</a></li>
  <li><a href="#">Critical Infrastructure</a></li>
  <li><a href="#">Energy</a></li>
  <li><a href="#">Retail & Hospitality</a></li>
  <li><a href="#">For CIO / CISO</a></li>
  <li><a href="#">For Security Teams</a></li>
  <li><a href="#">For HR Teams</a></li>
  <li><a href="#">Workforce Access</a></li>
  <li><a href="#">Identity Verification Audit</a></li>
  <li><a href="#">Deploy Passkeys</a></li>
  <li><a href="#">Candidate Verification for HR Teams</a></li>
  <li><a href="#">Modernize User Experience</a></li>
  <li><a href="#">Call Center Identity Verification</a></li>
  <li><a href="#">Accelerate Compliance</a></li>
  <li><a href="#">Future-Proof Your Legacy IAM</a></li>
  <li><a href="#">Zero Trust Authentication</a></li>
  <li><a href="#">Customer Fraud Prevention</a></li>
</ul> },
    {
      id: "customers",
      type: "link",
      title: "Customers",
      href:"#",
    },
    { id: "resources", type: "dropdown", title: "Resources", content: <ul className="space-y-4">
  <li><a href="#">Resource Center</a></li>
  <li><a href="#">Reports and Guides</a></li>
  <li><a href="#">Passkey Resources</a></li>
  <li><a href="#">Videos</a></li>
  <li><a href="#">State of Passwordless Security</a></li>
  <li><a href="#">See All Resources</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Identity Under Siege Executive Guide</a></li>
  <li><a href="#">Definitive Passwordless Guide</a></li>
  <li><a href="#">Identity Security Guide</a></li>
  <li><a href="#">Security Encyclopedia</a></li>
  <li><a href="#">How HYPR Passwordless Works</a></li>
  <li><a href="#">Support Center</a></li>
  <li><a href="#">Documentation</a></li>
  <li><a href="#">API Reference</a></li>
  <li><a href="#">Knowledge Base</a></li>
  <li><a href="#">System Status</a></li>
  <li><a href="#">Get Support</a></li>
  <li><a href="#">User Guide</a></li>
</ul> },
    {
      id: "company",
      type: "dropdown",
      title: "Company",
      content:<ul className="space-y-4">
  <li><a href="#">About HYPR</a></li>
  <li><a href="#">Careers</a></li>
  <li><a href="#">News</a></li>
  <li><a href="#">Events</a></li>
  <li><a href="#">Security & Certifications</a></li>
  <li><a href="#">Contact Us</a></li>
  <li><a href="#">Become a Partner</a></li>
</ul>,
    },
    { id: "pricing", type: "link", title: "Pricing", href: "/pricing" },
  ];

  return (
    <div className="mobile-menu h-[100%] overflow-y-auto ">
      <ul className="flex flex-col   space-y-2 text-sm text-left !my-[2rem] ">
        {menuItems.map((item) => (
          <li key={item.id} className="pb-2 border-b border-gray-400">
            {item.type === "link" ? (
              // Regular link item
              <a href={item.href} className="block  py-2 px-[2.5rem] text-3xl">
                {item.title}
              </a>
            ) : (
              // Dropdown item with click handler
              <>
                <div
                  className="flex px-[2.5rem] justify-between items-center cursor-pointer py-2"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className={`text-3xl ${openItems[item.id]? 'border-b-4 border-blue-800':''} `}>{item.title}</span>
                   <svg
                    className={`w-6 h-6 transition-transform duration-200 ${openItems[item.id] ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {openItems[item.id] && (
                  <div className="flex menu-item px-[2.5rem] text-lg !py-3">
                    {item.content}
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
