import { useEffect, useState } from "react";
import { Menu } from "../Components/Menu";

const HoverBridge = () => (
  <div className="absolute inset-x-0 top-full h-8 bg-transparent pointer-events-none group-hover:pointer-events-auto"></div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      id="nav"
      className="w-full bg-white flex justify-center items-center h-[100px]"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[100px]">
          <a
            className="inline-flex items-center "
            href="#"
            rel="home"
            aria-label="HYPR"
          >
            <svg
              className="h-8 w-auto md:h-10"
              aria-label="HYPR"
              viewBox="0 0 499.52 133.49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="hypr-gradient"
                  x1="267.18"
                  y1="-32.07"
                  x2="230.81"
                  y2="174.19"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#9f87e9" />
                  <stop offset="0.39" stopColor="#7250df" />
                  <stop offset="0.8" stopColor="#481bd6" />
                  <stop offset="1" stopColor="#3807d3" />
                </linearGradient>
              </defs>

              <g id="Artwork">
                <path
                  fill="url(#hypr-gradient)"
                  d="m28.87,0H0v133.49h28.87v-52.44l-19.53-25.67h19.53V0Zm55.54,0v55.38H28.87l18.69,25.67h36.85v52.44h28.87V0h-28.87Zm271.59,14.23c-9.66-9.45-21.15-14.23-34.54-14.23h-62.36v133.49h28.82v-39.47h33.54c13.39,0,24.88-4.72,34.54-14.23,9.71-9.5,14.54-20.42,14.54-32.86s-4.83-23.2-14.54-32.7Zm-21.57,47.82c-4.72,4.04-10.45,6.09-17.27,6.09h-29.24V25.72h29.24c6.67,0,12.39,2.05,17.16,6.09,4.78,4.04,7.19,9.08,7.19,15.12s-2.36,11.08-7.09,15.12Zm120.52,23.73c4.83-.53,9.55-1.63,14.23-3.31,4.62-1.73,9.13-4.09,13.54-7.19,4.36-3.04,7.87-7.24,10.5-12.44,2.62-5.25,3.94-11.13,3.94-17.69,0-8.08-1.57-15.17-4.62-21.21-3.1-5.98-7.3-10.66-12.65-14.02-5.41-3.31-11.34-5.83-17.9-7.45-6.51-1.63-13.65-2.47-21.36-2.47h-57.53v133.49h28.87v-59.68l54.54,59.68h33.02l-44.57-47.72Zm-16.48-22.36h-26.51V25.72h26.88c4.83,0,9.29.42,13.28,1.26,3.99.89,7.66,2.78,11.08,5.83,3.41,2.99,5.09,6.93,5.09,11.76s-1.73,8.77-5.2,11.76c-3.46,3.04-7.24,4.93-11.29,5.83-4.04.84-8.5,1.26-13.33,1.26ZM219,0l-32.02,41.94L156.48,0h-33.39l9.97,13.28,40.26,53.44v66.77h27.66v-65.35L251.23,0h-32.23Z"
                />
              </g>
            </svg>
          </a>

          <nav className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-6 text-sm font-medium text-gray-700">
              <li className="relative group">
                <a
                  href="#"
                  className="nav-item flex items-center gap-1 hover:!text-[#3807d3] transition-colors"
                >
                  Platform
                  <svg
                    className="w-3 h-3 mt-[0.2rem] transition-transform duration-200 group-hover:rotate-180"
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
                </a>

                {/* Invisible hover bridge - maintains hover state */}
                <HoverBridge />
                {/* Platform */}
                <div
                  className="drop-menu fixed top-[100px] -translate-x-1/2 w-[1113px]  left-1/2   bg-white shadow-xl rounded-lg  
                     opacity-0 invisible scale-95 
                     group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                     transition-all duration-200 z-10 border border-gray-100"
                >
                  <div className="grid grid-cols-[513px_330px_270px] items-start">
                    {/* First col */}
                    <div className="menu-col">
                      <a
                        href="/web/20250619131416/https://www.hypr.com/platform"
                        className="link-title"
                      >
                        HYPR Identity Assurance Platform
                      </a>
                      <p className="title-desc  !mt-[.2rem]">
                        Complete identity security solution that creates trust
                        in the identity lifecycle
                      </p>

                      <ul className="!mt-[1.5rem]">
                        <li className="flex flex-row gap-2 items-center">
                          <img
                            src="/public/hypr-auth.svg"
                            className="mb-6"
                          ></img>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/platform/hypr-authenticate-passwordless-mfa"
                            >
                              HYPR Authenticate: Passwordless MFA
                            </a>

                            <p className="menu-desc">
                              Phishing-resistant passkeys from desktop to cloud
                            </p>
                          </div>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                          <img
                            src="/public/hypr-adapt.svg"
                            className="mb-6"
                          ></img>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/platform/hypr-adapt"
                            >
                              HYPR Adapt: Risk Policy &amp; Orchestration
                            </a>

                            <p className="menu-desc">
                              Comprehensive identity risk engine and adaptive
                              authentication
                            </p>
                          </div>
                        </li>
                        <li className="flex flex-row gap-2 items-center">
                          <img
                            src="/public/hypr-affirm.svg"
                            className="mb-6"
                          ></img>
                          <div className="gap-1">
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/platform/hypr-affirm-identity-verification"
                            >
                              HYPR Affirm: Identity Verification
                            </a>

                            <p className="menu-desc">
                              Identity proofing and verification built for the
                              enterprise
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Second col */}
                    <div className="menu-col">
                      <div>
                        <p className="title">Key integrations</p>
                        <ul className="grid grid-cols-2 !gap-x-6 gap-y-1 !mt-6">
                          <li>
                            <div>
                              <a
                                className="link-regular"
                                href="/web/20250619131416/https://www.hypr.com/integrations/azure-ad"
                              >
                                Entra ID (Azure)
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular "
                                href="/web/20250619131416/https://www.hypr.com/integrations/okta"
                              >
                                Okta
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular"
                                href="/web/20250619131416/https://www.hypr.com/integrations/ping-identity"
                              >
                                Ping
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular "
                                href="/web/20250619131416/https://www.hypr.com/integrations/crowdstrike"
                              >
                                CrowdStrike
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular "
                                href="/web/20250619131416/https://www.hypr.com/integrations/idemia"
                              >
                                Idemia
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular "
                                href="/web/20250619131416/https://www.hypr.com/integrations/yubikey"
                              >
                                Yubico
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular "
                                href="/web/20250619131416/https://www.hypr.com/integrations/ssh-linux"
                              >
                                SSH &amp; Linux
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular"
                                href="/web/20250619131416/https://www.hypr.com/integrations/forgerock"
                              >
                                ForgeRock
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular"
                                href="/web/20250619131416/https://www.hypr.com/integrations/hid"
                              >
                                HID
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular"
                                href="/web/20250619131416/https://www.hypr.com/integrations/citrix"
                              >
                                Citrix
                              </a>
                            </div>
                          </li>

                          <li>
                            <div>
                              <a
                                className="link-regular"
                                href="/web/20250619131416/https://www.hypr.com/integrations/onelogin"
                              >
                                OneLogin
                              </a>
                            </div>
                          </li>
                        </ul>
                        <div className="!mt-[2rem]">
                          <a
                            className="link-regular"
                            href="/web/20250619131416/https://www.hypr.com/integrations"
                          >
                            See All Integrations
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Third col */}
                    <div className="menu-col !h-[100%] bg-gray-100">
                      <div className="w-full max-w-full h-auto">
                        <img
                          className="w-full max-w-full h-auto"
                          src="https://web.archive.org/web/20250619131416im_/https://www.hypr.com/hubfs/Media%20Graphics/HYPR-Enterprise-Passkeys_1300x749.webp"
                          alt="HYPR Enterprise Passkeys"
                          loading="lazy"
                        ></img>
                      </div>

                      <a
                        className="link-regular "
                        href="/web/20250619131416/https://www.hypr.com/platform/enterprise-passkeys"
                      >
                        HYPR Enterprise Passkeys
                      </a>
                      <p className="menu-desc">
                        Integrate proven FIDO2 phishing-resistant passwordless
                        authentication with your IAM environments
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                {/* Solutions */}
                <a
                  href="#"
                  className="nav-item flex items-center gap-1 hover:!text-[#3807d3] transition-colors"
                >
                  Solutions
                  <svg
                    className="w-3 h-3 mt-[0.2rem] transition-transform duration-200 group-hover:rotate-180"
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
                </a>
                <HoverBridge />
                <div
                  className="drop-menu fixed -translate-x-1/2 w-[1113px] top-[100px]  left-1/2  bg-white shadow-xl rounded-lg 
                     opacity-0 invisible scale-95 
                     group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                     transition-all duration-200 z-50 border border-gray-100"
                >
                  <div className="grid grid-cols-[228px_615px_270px] items-start">
                    {/* First col */}
                    <div className="menu-col gap-2">
                      <p className="title">Industry</p>
                      <ul className="flex flex-col gap-1">
                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/industry/financial-services"
                            >
                              Financial Services
                            </a>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/industry/manufacturing-critical-infrastructure"
                            >
                              Critical Infrastructure
                            </a>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/industry/energy-utilities"
                            >
                              Energy
                            </a>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/industry/retail-hospitality"
                            >
                              Retail &amp; Hospitality
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Second col */}
                    <div className="menu-col">
                      <p className="title text-left">Business Initiative</p>
                      <ul className="grid grid-cols-2 text-left !gap-x-8 gap-y-1 !mt-6">
                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/workforce-identity-assurance"
                            >
                              Workforce Access
                            </a>
                            <p className="menu-desc">
                              Improve workforce security &amp; Know Your
                              Employee
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/identity-verification-audit"
                            >
                              Identity Verification Audit
                            </a>
                            <p className="menu-desc">
                              Run a comprehensive identity verification check of
                              your workforce in days
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/user-experience"
                            >
                              Modernize User Experience
                            </a>
                            <p className="menu-desc">
                              Boost productivity, satisfaction and engagement
                              for workforce and customers
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/passkeys"
                            >
                              Deploy Passkeys
                            </a>
                            <p className="menu-desc">
                              Find the right next-gen passkeys for your
                              customers or workforce
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/accelerate-compliance"
                            >
                              Accelerate Compliance
                            </a>
                            <p className="menu-desc">
                              Meet regulatory requirements without disrupting
                              user experience
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/call-center-verification"
                            >
                              Call Center Identity Verification
                            </a>
                            <p className="menu-desc">
                              Improve verification of employees and customers
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/zero-trust-authentication"
                            >
                              Zero Trust Authentication
                            </a>
                            <p className="menu-desc">
                              Stop credential-based attacks with a Zero Trust
                              identity approach
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/modernize-legacy-iam"
                            >
                              Future-Proof Your Legacy IAM
                            </a>
                            <p className="menu-desc">
                              Improve identity security without replatforming or
                              replacing your IAM solution
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/customer-fraud-prevention"
                            >
                              Customer Fraud Prevention
                            </a>
                            <p className="menu-desc">
                              Defeat ATO, account sharing, promo abuse, and add
                              spoof detection, device fingerprinting &amp; more
                            </p>
                          </div>
                        </li>

                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/solutions/candidate-verification-onboarding"
                            >
                              Candidate Verification for HR Teams
                            </a>
                            <p className="menu-desc">
                              Combat the growing threat of fake applicants and
                              interview deception
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* Third col */}
                    <div className="menu-col  !h-[100%] bg-gray-100">
                      <div className="w-full max-w-full h-auto">
                        <img
                          className="w-full max-w-full h-auto"
                          src="/public/Forrester-TEI-Report-SC.webp"
                          alt="The Total Economic Impact™ of HYPR"
                          loading="lazy"
                        ></img>
                      </div>

                      <a
                        className="link-regular"
                        href="/web/20250619131416/https://www.hypr.com/resources/report-forrester-tei-of-hypr"
                      >
                        The Total Economic Impact™ of HYPR
                      </a>
                      <p className="menu-desc">
                        Forrester Consulting calculates that HYPR customers save
                        millions of dollars, with a 324% ROI
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a className="nav-item" href="#">
                  Customers
                </a>
              </li>
              {/* Resources */}
              <li className="relative group">
                <a
                  href="#"
                  className="nav-item flex items-center gap-1 hover:!text-[#3807d3] transition-colors"
                >
                  Resources
                  <svg
                    className="w-3 h-3 mt-[0.2rem] transition-transform duration-200 group-hover:rotate-180"
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
                </a>
                <HoverBridge />
                <div
                  className="drop-menu fixed -translate-x-1/2 w-[1113px] top-[100px]  left-1/2  bg-white shadow-xl rounded-lg py-2 
                     opacity-0 invisible scale-95 
                     group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                     transition-all duration-200 z-50 border border-gray-100"
                >
                  <div className="grid grid-cols-[388px_360px_365px] items-start">
                    {/* First col */}
                    <div className="menu-col">
                      <a
                        className="link-title"
                        href="/web/20250619131416/https://www.hypr.com/resources"
                      >
                        Resource Center
                      </a>
                      <p className="title-desc  !mt-[.2rem]">
                        Learn about IAM security, passkeys and passwordless
                        authentication technology
                      </p>
                      <ul className="!mt-3">
                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/resources?cat=Research,White%20Papers%20&amp;%20Guides"
                            >
                              Reports and Guides
                            </a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a
                              className="link-regular "
                              href="/web/20250619131416/https://www.hypr.com/resources?topic=Passkeys"
                            >
                              Passkey Resources
                            </a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/resources?cat=Videos%20&amp;%20Podcasts"
                            >
                              Videos
                            </a>
                          </div>
                        </li>
                        <li>
                          <div>
                            <a
                              className="link-regular"
                              href="/web/20250619131416/https://www.hypr.com/resources/report-state-of-passwordless"
                            >
                              State of Passwordless Security
                            </a>
                          </div>
                        </li>
                      </ul>
                      <div className="mt-3">
                        <a
                          className="link-regular"
                          href="/web/20250619131416/https://www.hypr.com/resources"
                        >
                          See All Resources
                        </a>
                      </div>
                    </div>
                    {/* Second col */}
                    <div>
                      <div className="menu-col">
                        <div>
                          <div>
                            <p className="title">Additional Resources</p>

                            <ul className="!mt-3">
                              <li>
                                <div>
                                  <a
                                    className="link-regular"
                                    href="https://web.archive.org/web/20250619131416/https://blog.hypr.com/"
                                  >
                                    Blog
                                  </a>
                                </div>
                              </li>

                              <li>
                                <div>
                                  <a
                                    className="link-regular"
                                    href="/web/20250619131416/https://www.hypr.com/resources/passwordless-security-guide"
                                  >
                                    Definitive Passwordless Guide
                                  </a>
                                </div>
                              </li>

                              <li>
                                <div>
                                  <a
                                    className="link-regular"
                                    href="/web/20250619131416/https://www.hypr.com/resources/identity-security-guide"
                                  >
                                    Identity Security Guide
                                  </a>
                                </div>
                              </li>

                              <li>
                                <div>
                                  <a
                                    className="link-regular"
                                    href="/web/20250619131416/https://www.hypr.com/security-encyclopedia"
                                  >
                                    Security Encyclopedia
                                  </a>
                                </div>
                              </li>

                              <div className="!mt-3">
                                <a
                                  className="link-regular"
                                  href="/web/20250619131416/https://www.hypr.com/platform/how-passwordless-authentication-works"
                                >
                                  How HYPR Passwordless Works
                                </a>

                                <p className="menu-desc">
                                  How HYPR Authenticate passwordless MFA works
                                </p>
                              </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Third col */}
                    <div>
                      <div className="menu-col">
                        <div>
                          <div>
                            <a className="link-title" href="/support">
                              Support Center
                            </a>
                            <p className="title-desc !mt-[.5rem] ">
                              Support help, setup guides, developer
                              documentation and more
                            </p>

                            <ul className="!mt-3">
                              <li>
                                <a
                                  className="link-regular"
                                  target="_blank"
                                  href="https://docs.hypr.com/"
                                >
                                  Documentation
                                </a>
                              </li>

                              <li>
                                <a
                                  className="link-regular"
                                  target="_blank"
                                  href="https://apidocs.hypr.com/"
                                >
                                  API Reference
                                </a>
                              </li>

                              <li>
                                <a
                                  className="link-regular"
                                  target="_blank"
                                  href="https://support.hypr.com/hc/en-us/categories/360002965332"
                                >
                                  Knowledge Base
                                </a>
                              </li>

                              <li>
                                <a
                                  className="link-regular"
                                  target="_blank"
                                  href="https://status.hypr.com/"
                                >
                                  System Status
                                </a>
                              </li>

                              <li>
                                <a
                                  className="link-regular"
                                  target="_blank"
                                  href="https://support.hypr.com/hc/en-us"
                                >
                                  Get Support
                                </a>
                              </li>

                              <li>
                                <a
                                  className="link-regular"
                                  href="https://get.hypr.com/getting-started"
                                >
                                  User Guide
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  className="nav-item flex items-center gap-1 hover:!text-[#3807d3] transition-colors"
                >
                  Company
                  <svg
                    className="w-3 h-3 mt-[0.2rem] transition-transform duration-200 group-hover:rotate-180"
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
                </a>
                <HoverBridge />
                <div
                  className="drop-menu fixed -translate-x-1/2 w-[1113px] top-[100px]  left-1/2  bg-white shadow-xl rounded-lg 
                     opacity-0 invisible scale-95 
                     group-hover:opacity-100 group-hover:visible group-hover:scale-100 
                     transition-all duration-200 z-50 border border-gray-100"
                >
                  <div className="grid grid-cols-[433px_410px_270px] items-start">
                    {/* First col */}
                    <div className="menu-col">
                      <div>
                        <div>
                          <a className="link-title" href="/company">
                            About HYPR
                          </a>
                          <p className="title-desc">
                            HYPR creates trust in the identity lifecycle
                          </p>

                          <ul>
                            <li>
                              <a
                                className="link-regular"
                                href="/company/careers"
                              >
                                Careers
                              </a>
                            </li>

                            <li>
                              <a
                                className="link-regular"
                                href="/company/newsroom"
                              >
                                News
                              </a>
                            </li>

                            <li>
                              <a
                                className="link-regular"
                                href="/company/events"
                              >
                                Events
                              </a>
                            </li>

                            <li>
                              <a
                                className="link-regular"
                                href="/trust-center/security-compliance"
                              >
                                Security & Certifications
                              </a>
                            </li>

                            <li>
                              <a className="link-regular" href="/contact">
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Second col */}
                    <div className="menu-col">
                      <div>
                        <div>
                          <p className="title">Partner Program</p>

                          <ul>
                            <li>
                              <a
                                className="link-regular"
                                href="/company/partners"
                              >
                                Become a Partner
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Third col */}
                    <div className="menu-col !h-[100%] bg-gray-100">
                      
                        
                          <div className="w-full max-w-full h-auto">
                            <img
                            className="w-full max-w-full h-auto"
                              src="https://web.archive.org/web/20250619131416im_/https://www.hypr.com/hubfs/Media%20Graphics/SOPIA_SOCIAL_CARD.webp"
                              alt="State of Passwordless Identity Assurance Report"
                              loading="lazy"
                            ></img>
                          </div>

                          <a
                            className="link-regular"
                            href="/resources/report-state-of-passwordless"
                          >
                            State of Passwordless Identity Assurance Report
                          </a>

                          <p className="menu-desc">
                            The Fifth Anniversary Edition investigates top
                            attack vectors, the greatest security gaps, and
                            technology adoption trends
                          </p>
                        
                      
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#" className="nav-item">
                  Pricing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="ml-[1.15rem] bg-[#3807d3] text-white px-4 py-2 rounded-md hover:bg-gray-900 transition text-left"
                >
                  <span className="text-white">GET A DEMO</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Hamburger (mobile only) */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none p-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <nav className="lg:hidden fixed z-999 mobile-nav left-0 h-[calc(100vh-100px)] w-[70vw] max-w-[520px">
            <Menu />
          </nav>
        )}
      </div>
    </header>
  );
}
