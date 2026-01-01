import Slider from "../Components/Slider";
import React from 'react';

export default function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center w-full min-h-[300px] sm:min-h-[540px] pb-[10px] bg-[url('/Sitebackground.webp')] bg-cover bg-center md:px-[3.75rem]"
      >
        <div className="flex flex-row my-[3.25rem]">
          <div className="flex flex-wrap !mx-auto">
            <div className="flex flex-col items-center justify-between w-full max-w-[1118px] gap-8 lg:flex-row">
              {/* Text content */}
              <div className="flex flex-col w-full gap-2 px-[1.25rem] text-center md:px-0 md:text-left">
                <h1 className="text-left text-[3.125rem] md:text-[3.125rem]">
                  Identity Security Starts Here
                </h1>
                <p className="text-left">
                  Stop Identity Fraud and Improve Productivity With Passwordless
                  Identity Assurance
                </p>
                <a
                  href="#"
                  className="inline-block w-fit px-6 py-3 mt-6 font-medium text-left !text-white transition rounded-md bg-[#3807d3] hover:bg-gray-900"
                >
                  GET A DEMO
                </a>
              </div>

              <div className="hidden w-[100%] md:block">
                <Slider />
              </div>
              
              <div className="flex flex-col gap-12 md:hidden">
                {/* Item 1 */}
                <div className="flex flex-row items-center gap-8 pl-[0.25rem] text-left">
                  <div>
                    <img
                      src="/hero_carousel_img_1.png"
                      alt="Passwordless Authentication - Eliminate credential phishing attacks"
                      width="125"
                      height="125"
                      className="min-w-[125px] !h-auto rounded-r-2xl max-[480px]:!max-w-[125px]"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-[1.125rem] text-[#1a1288] max-[400px]:text-[1rem]">
                      Strong
                    </span>
                    <h3 className="!mb-4 text-2xl font-bold max-[400px]:!text-[1.5rem]">
                      Passwordless Authentication
                    </h3>
                    <p className="mb-6 text-gray-600 max-[400px]:!text-[1rem]">
                      Eliminate credential phishing attacks while improving user
                      experience for your workforce and customers
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium !text-[#1a1288]"
                    >
                      <span className="hover:!underline">Learn More</span>
                      <span className="ml-1.5 text-[1.5em]">►</span>
                    </a>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-row items-center gap-8 pl-[1.25rem] text-left">
                  <div className="flex-1">
                    <span className="font-medium text-[1.125rem] text-[#1a1288] max-[400px]:text-[1rem]">
                      Comprehensive
                    </span>
                    <h3 className="!mb-4 text-2xl font-bold max-[400px]:!text-[1.5rem]">
                      Identity Verification
                    </h3>
                    <p className="mb-6 text-gray-600 max-[400px]:!text-[1rem]">
                      Stop modern identity fraud ranging from account onboarding
                      and recovery to interview fraud and remote work
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium !text-[#1a1288]"
                    >
                      <span className="hover:!underline">Learn More</span>
                      <span className="ml-1.5 text-[1.5em]">►</span>
                    </a>
                  </div>
                  <div>
                    <img
                      src="/hero_carousel_img_2.png"
                      alt="Identity Verification - Stop modern identity fraud"
                      width="125"
                      height="125"
                      className="min-w-[125px] !h-auto rounded-l-2xl max-[480px]:!max-w-[125px]"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-row items-center gap-8 pl-[0.25rem] text-left">
                  <div>
                    <img
                      src="/hero_carousel_img_3.png"
                      alt="Risk & Policy Orchestration - Improve compliance with regulations"
                      width="125"
                      height="125"
                      className="min-w-[125px] !h-auto rounded-r-2xl max-[480px]:!max-w-[125px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-[1.125rem] text-[#1a1288] max-[400px]:text-[1rem]">
                      Continuous
                    </span>
                    <h3 className="!mb-4 text-2xl font-bold max-[400px]:!text-[1.5rem]">
                      Risk & Policy Orchestration
                    </h3>
                    <p className="mb-6 text-gray-600 max-[400px]:!text-[1rem]">
                      Improve compliance with regulations and internal controls
                      while providing fewer clicks and less user pain
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center font-medium !text-[#1a1288]"
                    >
                      <span className="hover:!underline">Learn More</span>
                      <span className="ml-1.5 text-[1.5em]">►</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Marquee */}
      <div className="scroll">
        <ul>
          {[...Array(2)].map((_, arrayIndex) => (
            <React.Fragment key={`marquee-${arrayIndex}`}>
              {[
                { src: "/company logos/Fiserv_logo.png", alt: "Fiserv - Partner", width: 160, height: 160 },
                { src: "/company logos/cvs-health-logo-stacked3.png", alt: "CVS Health - Customer", width: 160, height: 160 },
                { src: "/company logos/fido-alliance-logo-new.png", alt: "FIDO Alliance - Certified Partner", width: 160, height: 160 },
                { src: "/company logos/frontier-credit-union-dark.png", alt: "Frontier Credit Union - Customer", width: 160, height: 160 },
                { src: "/company logos/HCLogo-og.png", alt: "HC - Partner", width: 160, height: 160 },
                { src: "/company logos/logo-state_auto_insurance.png", alt: "State Auto Insurance - Customer", width: 160, height: 160 },
                { src: "/company logos/norwegian_air.png", alt: "Norwegian Air - Customer", width: 160, height: 160 },
                { src: "/company logos/rakuten_logo.png", alt: "Rakuten - Customer", width: 160, height: 160 },
                { src: "/company logos/UPG_RGB_Main_Blue.png", alt: "UPG - Partner", width: 160, height: 160 },
              ].map((logo, index) => (
                <li key={`logo-${arrayIndex}-${index}`}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain w-40 h-40 rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
      </div>

      {/* FIXED Identity Section - Restored original responsive layout */}
      <section id="identity" className="w-full flex justify-center">
        <div className="flex flex-col w-full lg:flex-row gap-6 md:px-10 max-w-[calc(1178px+1rem)]">
          {/* Column 1 - Workforce */}
          <div className="w-full flex !h-[100%] flex-col shrink-1 md:flex-row items-center lg:w-1/2 md:p-10 gap-6 bg-hypr-blue md:rounded-[20px]">
            <div className="w-full md:flex flex-col md:flex-row gap-6 items-center justify-center">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="../HYPR_Homepage_Workforce.webp"
                />
                <img
                  src="../workforce_mobile.png"
                  alt="Identity Security for Workforce - Secure employee identity lifecycle"
                  className="sm:h-auto min-w-[100%] md:min-w-[160px] rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="240"
                />
              </picture>

              <div className="w-full p-[2.5rem] md:p-0 md:max-w-[500px] !h-[100%] flex flex-col">
                <h2 className="!box-border !text-[2rem] md:text-4xl font-bold text-white !text-left md:text-left !mb-4">
                  Identity Security for Your Workforce
                </h2>
                <p className="text-white text-left !mb-5">
                  Empower your employees with comprehensive Identity Assurance.
                  Secure the entire identity lifecycle with HYPR's easy-to-use
                  FIDO Certified passwordless authentication, continuous risk
                  monitoring, and automated identity verification designed for
                  KYE.
                </p>
                <a className="button" href="#">
                  Explore Workforce
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Customer */}
          <div className="w-full flex !h-[100%] flex-col shrink-1 md:flex-row items-center lg:w-1/2 md:p-10 gap-6 bg-yellow md:rounded-[20px]">
            <div className="w-full md:flex flex-col md:flex-row gap-6 items-center justify-center">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="../HYPR_Homepage_Customer.png"
                />
                <img
                  src="../customer_mobile.png"
                  alt="Identity Security for Customers - Reduce account takeover fraud"
                  className="sm:h-auto min-w-[100%] md:min-w-[160px] rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                  width="320"
                  height="240"
                />
              </picture>

              <div className="w-full p-[2.5rem] md:p-0 md:max-w-[500px] !h-[100%] flex flex-col">
                <h2 className="!box-border !text-[2rem] md:text-4xl font-bold text-text-primary !text-left md:text-left !mb-4">
                  Identity Security for Your Customers
                </h2>
                <p className="text-text-primary text-left !mb-5">
                  Reduce customer frustration while protecting against account
                  takeover and identity fraud. HYPR Identity Assurance combines
                  frictionless passwordless authentication, proactive risk
                  controls and integrated identity verification for end to end
                  identity protection
                </p>
                <a className="button" href="#">
                  Explore Customer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistics" className="w-full pt-[30px] pb-[10px] bg-white">
        <div className="grid max-w-[1178px] grid-cols-1 gap-8 mx-auto text-center align-middle md:grid-cols-3 md:text-left">
          {/* Column 1 */}
          <div className="flex flex-col justify-start px-2">
            <h2 className="mb-2 text-xl text-center">
              Up to
              <span className="text-[3.35rem] font-bold text-yellow"> 98.4%</span>
            </h2>
            <p className="mb-[1.25rem] text-center text-gray-600 text-[1.175rem] mx-auto max-w-[200px]">
              Reduction in
              <br /> Account-Takeover Fraud
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col justify-start px-2 shrink-0">
            <h2 className="mb-2 text-center">
              <span className="text-[3.35rem] font-bold text-yellow">25,000,000+</span>
            </h2>
            <p className="text-center text-gray-600 text-[1.175rem] mx-auto max-w-[140px]">
              Deployed Users and Growing
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col justify-start px-2 shrink-0">
            <h2 className="mb-2 text-center">
              <span className="text-[3.35rem] font-bold text-yellow">324%</span>
            </h2>
            <p className="text-center text-gray-600 text-[1.175rem] mx-auto max-w-[140px]">
              ROI Verified by Forrester®
            </p>
          </div>
        </div>
      </section>

      {/* Passwordless Section */}
      <section
        id="passwordless"
        className="w-full max-w-[1300px] p-[1.25rem] my-[3.75rem] mx-auto rounded-[30px] bg-[url('/HYPR_Background2_Passwordless4.png')] bg-center bg-auto bg-no-repeat"
      >
        <div className="flex flex-col-reverse items-center max-w-[1178px] gap-8 mx-auto rounded-xl md:flex-row !px-[1.25rem]">
          {/* Text Column */}
          <div className="flex flex-col w-full px-[0.75rem] text-center md:w-1/2 md:text-left">
            <span className="text-yellow text-[1.85rem]">2025</span>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              State of Passwordless Identity Assurance
            </h2>
            <p className="text-lg text-gray-700">
              The fifth annual edition includes an expanded investigation into
              the trends shaping the identity security landscape. Based on
              global security research conducted by S&P Global Market
              Intelligence 451 Research, the findings in this report will help
              security teams evaluate their identity security environment and
              determine the most effective defense strategies.
            </p>
            <div className="CTA">
              <a className="button" href="#">
                Get a report
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <img
              src="/SoPIA 2025 Cover.png"
              alt="State of Passwordless Identity Assurance 2025 Report Cover"
              width="600"
              height="800"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* HYPR Way Section */}
      <section id="HYRP-way" className="w-full pt-[1.25rem]">
        <div className="px-[1.25rem] mx-auto wrapper">
          <div className="grid items-stretch grid-cols-1 gap-8 lg:grid-cols-3">
            <h2 className="col-span-full mt-6 mb-2 text-2xl font-semibold text-center lg:mb-6">
              The HYRP way
            </h2>

            {/* Card 1 */}
            <div className="flex flex-col items-center justify-between w-full gap-6 px-3 py-8 rounded-lg bg-transparent text-blue">
              <div className="flex flex-col items-center gap-6">
                <img
                  src="../passkeyshield.webp"
                  alt="No Shared Credentials - Phishing-resistant MFA with open standards"
                  width="206"
                  height="206"
                  className="w-[206px] h-auto ml-[2rem]"
                  loading="lazy"
                  decoding="async"
                />
                <h4 className="my-5 text-xl font-bold text-center">
                  No Shared <br /> Credentials
                </h4>
                <p className="max-w-[400px] text-center text-sm text-white/80">
                  Phishing-resistant MFA from desktop to cloud built on proven
                  open standards with no password-based fallbacks
                </p>
              </div>
              <div className="w-full mt-6 text-center"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center justify-between w-full gap-6 px-3 py-8 rounded-lg bg-transparent text-blue">
              <div className="flex flex-col items-center gap-6">
                <img
                  src="/identitysecurity.webp"
                  alt="Comprehensive Identity Security - End-to-end protection"
                  width="246"
                  height="246"
                  className="w-[246px] h-auto"
                  loading="lazy"
                  decoding="async"
                />
                <h4 className="my-5 text-xl font-bold text-center">
                  Comprehensive <br /> Identity Security
                </h4>
                <p className="max-w-[400px] mb-6 text-center text-sm text-white/80">
                  End-to-end identity security from day zero with unified
                  passwordless authentication, adaptive risk mitigation, and
                  automated identity verification
                </p>
              </div>
              <div className="CTA">
                <a className="button" href="#">
                  SPEAK TO AN EXPERT
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center justify-between w-full gap-6 px-3 py-8 rounded-lg bg-transparent text-blue">
              <div className="flex flex-col items-center gap-6">
                <img
                  src="../feature3.webp"
                  alt="Universal User Experience - Limitless authentication flows"
                  width="187"
                  height="187"
                  className="w-[187px] h-auto"
                  loading="lazy"
                  decoding="async"
                />
                <h4 className="my-5 text-xl font-bold text-center">
                  Universal <br /> User Experience
                </h4>
                <p className="max-w-[400px] text-center text-sm text-white/80">
                  Limitless authentication flows and continuous real-time risk
                  assessment to deliver a world-class experience for all users
                </p>
              </div>
              <div className="w-full mt-6 text-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col items-center w-full">
        <div className="max-w-[1300px] mx-auto rounded-2xl !pt-[4rem]">
          <div className="flex flex-col items-center max-w-[1200px] px-4 mb-12 text-center text-black">
            <h2 className="mb-[1.5rem] text-[2.25rem] font-bold text-hypr-blue max-w-[900px] md:text-[3rem] md:text-4xl">
              Customers Give HYPR Highest Ratings Across the Board
            </h2>
            <hr className="section__divider" />
            <img
              src="../G2-badges-section-650x150.svg"
              alt="G2 Badges - HYPR customer ratings and awards"
              width="1200"
              height="150"
              className="w-[1200px] h-auto px-8"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full max-w-[1300px] py-[1.25rem] my-[3.75rem] mx-auto rounded-[30px]"
      >
        <div className="flex flex-row flex-wrap items-center max-w-[1178px] px-[1.25rem] mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center justify-center px-[1rem] text-center md:items-start md:text-left">
              <h2 className="mt-[1.25rem] text-3xl font-bold max-w-[500px] mx-auto lg:text-4xl md:mx-0">
                The HYPR Identity Assurance <br />
                Platform
              </h2>
              <p className="my-[1.25rem] max-w-[470px] mx-auto md:mx-0">
                <span>
                  Reduce risk at every point in the identity lifecycle with the
                  only platform that unifies phishing-resistant
                </span>
                <span>
                  passwordless authentication, adaptive risk mitigation, and
                  automated identity verification.
                </span>
              </p>
              <div className="flex justify-center !shrink-0 sm:justify-start">
                <a className="button" href="#">
                  MORE ABOUT THE HYRP PLATFORM
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="../platformHYPR.webp"
                alt="HYPR Identity Assurance Platform Dashboard - Unified security interface"
                width="600"
                height="400"
                className="w-full h-auto rounded-lg object-cover md:object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}