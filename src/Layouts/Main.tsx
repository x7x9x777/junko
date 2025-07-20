import React, { useEffect, useRef, useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import Slider from "../Components/Slider";

export default function Main() {



  return (
    <main>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full pb-[10px] px-[3.75rem] min-h-[300px] sm:min-h-[540px] bg-[url('/Sitebackground.webp')] bg-cover bg-center flex justify-center  flex-col items-center"
      >
        <div className="flex flex-row my-[3.25rem]">
          <div className="flex flex-wrap !mx-auto">
          <div className="w-full max-w-[1118px]   gap-8 flex lg:flex-row flex-col items-center justify-between  ">
            {/* Text content */}
            <div className="text-center w-full md:text-left flex flex-col gap-2 ">
              <h1 className="text-[3.125rem] md:text-[3.125rem] text-left">
                Identity Security Starts Here
              </h1>
              <p className="text-left">
                Stop Identity Fraud and Improve Productivity With Passwordless
                Identity Assurance
              </p>
              <a
                href="#"
                className="mt-6 inline-block w-fit bg-[#3807d3] !text-white px-6 py-3 rounded-md hover:bg-gray-900 transition text-left font-medium"
              >
                GET A DEMO
              </a>
            </div>
     
            <div className="w-[100%]">
              <Slider />
            </div>

            {/* Slider */}
            {/* <Slider/> */}
          </div>
          </div>
        </div>
      </section>

      {/* Infinite Logo Marquee */}
      <div
        id="scroll"
        className="whitespace-nowrap !my-[1rem] 
        
         bg-white h-44 flex items-center relative"
      >
        <div id="scroll__inner">
        {/* <div className="flex flex-row "> */}
        <ul 
          className="flex items-center justify-center animate-scroll h-full"
          // style={{ animation: "scroll 30s linear infinite"

          //  }}
        >
          {/* Duplicate all logos for seamless scroll */}
          {[1, 2,3].map((group) => (
            <React.Fragment key={group}>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/Fiserv_logo.png"
                  alt="Fiserv"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/cvs-health-logo-stacked3.png"
                  alt="CVS Health"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/fido-alliance-logo-new.png"
                  alt="FIDO"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/frontier-credit-union-dark.png"
                  alt="Frontier CU"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/HCLogo-og.png"
                  alt="HC"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/logo-state_auto_insurance.png"
                  alt="State Auto"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/norwegian_air.png"
                  alt="Norwegian"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/rakuten_logo.png"
                  alt="Rakuten"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li className="h-full flex items-center">
                <img
                  src="/company logos/UPG_RGB_Main_Blue.png"
                  alt="UPG"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
            </React.Fragment>
          ))}
        </ul>
        </div>
        </div>
      {/* </div> */}

      {/* Empty placeholders */}
      <section id="identity" className="w-full flex justify-center ">
        <div className="flex flex-col md:flex-row gap-6 px-10 w-full max-w-[calc(1178px+1rem)] ">
          {/* Column 1 */}
          <div className="flex flex-col shrink-1 !h-[100%] md:flex-row items-center w-full md:w-1/2 p-10 gap-6 bg-hypr-blue rounded-[20px]">
            <div className="!shrink-0">
              <img
                src="../HYPR_Homepage_Workforce.webp"
                alt="Example 1"
                className="w-full max-w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div className="w-full !max-w-[500px] !h-[100%] flex flex-col ">
              <h2 className="!box-border  !text-[2rem] md:text-4xl font-bold text-white !text-left md:text-left !mb-4">
                Identity Security for Your Workforce
              </h2>
              <p className="text-white text-center md:text-left !mb-5">
                Empower your employees with comprehensive Identity Assurance.
                Secure the entire identity lifecycle with HYPR's easy-to-use
                FIDO Certified passwordless authentication, continuous risk
                monitoring, and automated identity verification designed for
                KYE.
              </p>

              {/* <a className="button mx-auto md:mx-0 bg-white text-hypr-blue px-4 py-2 rounded">
          Explore Workforce
        </a> */}
              <a
                className="button"
                href="https://www.hypr.com/solutions/workforce-identity-assurance"
              >
                Explore Workforce
              </a>
            </div>
          </div>

          {/* Column 2 - Made consistent with Column 1 */}
          <div className="flex flex-col shrink-1 md:flex-row items-center w-full md:w-1/2 p-10 gap-6 bg-yellow rounded-[20px]">
            <img
              src="../HYPR_Homepage_Customer.png"
              alt="Example 2"
              className="w-full max-w-full h-auto rounded-lg object-cover"
            />

            <div className="w-full !max-w-[500px] !h-[100%] flex flex-col">
              <h2 className="!box-border !text-[2rem] md:text-4xl font-bold !text-left md:text-left !mb-4">
                Identity Security for Your Customers
              </h2>
              <p className="text-text-primary text-center md:text-left !mb-5">
                Reduce customer frustration while protecting against account
                takeover and identity fraud. HYPR Identity Assurance combines
                frictionless passwordless authentication, proactive risk
                controls and integrated identity verification for end to end
                identity protection
              </p>
              <a
                className="button"
                href="https://www.hypr.com/solutions/workforce-identity-assurance"
              >
                Explore Customer
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="statistics" className="w-full pt-[30px] pb-[10px] bg-white">
        <div className="mx-auto max-w-[1178px] grid grid-cols-1 md:grid-cols-3 gap-8 text-center align-middle md:text-left">
          {/* Column 1 */}
          <div className="px-2 flex flex-col justify-start">
            <h2 className="text-xl text-center !mb-2">
              Up to
              <span className="text-[3.35rem] text-yellow font-bold">
                {" "}
                98.4%
              </span>
            </h2>
            <p className="text-[1.175rem] text-center text-gray-600 !mx-auto !mb-[1.25rem]  max-w-[200px]">
              Reduction in
              <br /> Account-Takeover Fraud
            </p>
          </div>

          {/* Column 2 */}
          <div className="px-2 flex flex-col justify-start shrink-0">
            <h2 className="text-center !mb-2">
              <span className="text-[3.35rem] text-yellow font-bold">
                25,000,000+
              </span>
            </h2>
            <p className="text-[1.175rem] text-center text-gray-600 !mx-auto max-w-[140px]">
              Deployed Users and Growing
            </p>
          </div>

          {/* Column 3 */}
          <div className="px-2 flex flex-col justify-start shrink-0">
            <h2 className="text-center !mb-2">
              <span className="text-[3.35rem] text-yellow font-bold">324%</span>
            </h2>
            <p className=" text-[1.175rem] text-center text-gray-600 !mx-auto  max-w-[140px]">
              ROI Verified by Forrester®
            </p>
          </div>
        </div>
      </section>
      <section
        id="passwordless"
        className="w-full max-w-[1300px] bg-[url('/HYPR_Background2_Passwordless4.png')] bg-center bg-auto bg-no-repeat p-[1.25rem] my-[3.75rem] !mx-auto rounded-[30px]"
      >
        <div className="max-w-[1178px] mx-auto flex flex-col-reverse md:flex-row items-center gap-8 !px-[1.25rem] rounded-xl">
          {/* Text Column */}
          <div className="w-full flex flex-col md:w-1/2 text-center md:text-left px-[0.75rem]">
            <span className="text-[1.85rem] text-yellow ">2025</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              State of Passwordless Identity Assurance
            </h2>
            <p className="text-gray-700 text-lg">
              The fifth annual edition includes an expanded investigation into
              the trends shaping the identity security landscape. Based on
              global security research conducted by S&P Global Market
              Intelligence 451 Research, the findings in this report will help
              security teams evaluate their identity security environment and
              determine the most effective defense strategies.
            </p>
            <div className="CTA">
              {" "}
              <a
                className="button"
                href="https://www.hypr.com/solutions/workforce-identity-assurance"
              >
                Get a report
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <img
              src="/SoPIA 2025 Cover.png"
              alt="Descriptive Alt Text"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section id="HYRP-way" className="w-full pt-[1.25rem]">
        <div className="wrapper flex flex-col sm:sm:flex-row justify-center  my-auto px-[1.25rem]">
          {/* Title and description centered */}

          {/* Responsive Grid - Centered Content */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          {/* Column 1 */}

          <div className="flex flex-col w-full items-center pt-[7.5rem] pl-[12px] rounded-lg text-blue">
            <img
              src="../passkeyshield.webp"
              alt="Descriptive Alt Text"
              className="w-[206px] h-auto"
            ></img>
            <h4 className="text-xl font-bold !my-[1.25rem] text-center">
              No Shared
              <br /> Credentials
            </h4>
            <div className="max-w-[400px]">
              <p className="text-sm text-white/80 text-center">
                Phishing-resistant MFA from desktop to cloud built on proven
                open standards with no password-based fallbacks
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col w-full items-center rounded-lg text-blue">
            <h2 className="!mt-[1.25rem] !mb-[3rem]">THe HYRP way</h2>
            <img
              src="/identitysecurity.webp"
              alt="Descriptive Alt Text"
              className="w-[246px] h-auto"
            ></img>

            <h4 className="text-xl !my-[1.25rem] font-bold text-center">
              Comprehensive
              <br /> Identity Security
            </h4>
            <div className="max-w-[400px] !mb-[2rem]">
              <p className="text-sm text-white/80 text-center">
                End-to-end identity security from day zero with unified
                passwordless authentication, adaptive risk mitigation, and
                automated identity verification
              </p>
            </div>
            <div className="CTA">
              {" "}
              <a
                className="button"
                href="https://www.hypr.com/solutions/workforce-identity-assurance"
              >
                SPEAK TO AN EXPERT
              </a>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col w-full items-center pt-[7.5rem] rounded-lg text-blue">
            <img
              src="../feature3.webp"
              alt="Descriptive Alt Text"
              className="w-[187px] h-auto"
            ></img>
            <h4 className="text-xl !my-[1.25rem] font-bold mb-2 text-center">
              Universal
              <br /> User Experience
            </h4>
            <div className="max-w-[400px]">
              <p className="text-sm text-white/80 text-center">
                Limitless authentication flows and continuous real-time risk
                assessment to deliver a world-class experience for all users
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>

      <section className="w-full flex flex-col items-center">
        <div className="max-w-[1300px] mx-auto rounded-2xl !pt-[4rem]">
          {/* Column with H2 on top and Image Below */}
          <div className="flex flex-col items-center max-w-[1200px] text-center text-black mb-12 px-4">
            {/* Title (H2) */}
            <h2 className="text-[3rem] md:text-4xl font-bold text-hypr-blue !mb-[1.5rem] max-w-[900px]">
              Customers Give HYPR Highest Ratings Across the Board
            </h2>
            <hr className="section__divider" />
            {/* Image Below */}
            <img
              src="../G2-badges-section-650x150.svg"
              alt="Secure Identity"
              className="w-[1200px] h-auto px-8"
            />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="w-full max-w-[1300px] py-[1.25rem] my-[3.75rem] mx-auto rounded-[30px]
      "
      >
        <div className=" flex flex-wrap flex-row max-w-[1178px] items-center mx-auto px-[1.25rem]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1: H2, Text, Button */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="md:text-4xl font-bold !mt-[1.25rem] max-w-[500px]">
                The HYPR Identity Assurance <br />
                Platform
              </h2>
              <p className="max-w-[470px] !my-[1.25rem]">
                <span>
                  Reduce risk at every point in the identity lifecycle with the
                  only platform that unifies phishing-resistant
                </span>
                <span>
                  {" "}
                  passwordless authentication, adaptive risk mitigation, and
                  automated identity verification.
                </span>
              </p>
              <div className="flex !shrink-0">
                {" "}
                <a className="button">MORE ABOUT THE HYRP PLATFORM</a>
              </div>
            </div>

            {/* Column 2: Image */}
            <div className="flex justify-center">
              <img
                src="../platformHYPR.webp"
                alt="Secure Identity"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section></section>
      <form></form>
    </main>
  );
}
