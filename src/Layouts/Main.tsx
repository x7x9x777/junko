import Slider from "../Components/Slider";

export default function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="hero"
        className="w-full pb-[10px] md:px-[3.75rem] min-h-[300px] sm:min-h-[540px] bg-[url('/Sitebackground.webp')] bg-cover bg-center flex justify-center  flex-col items-center"
      >
        <div className="flex flex-row my-[3.25rem]">
          <div className="flex flex-wrap !mx-auto">
            <div className="w-full max-w-[1118px]   gap-8 flex lg:flex-row flex-col items-center justify-between  ">
              {/* Text content */}
              <div className="text-center w-full px-[1.25rem] md:px-0 md:text-left flex flex-col gap-2 ">
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

              <div className="w-[100%] hidden md:block">
                <Slider />
              </div>
              <div className="flex flex-col gap-12 md:hidden">
                {/* Item 1 */}
                <div className="flex flex-row pl-[0.25rem] text-left items-center gap-8">
                  <div>
                    <img
                      src="/hero_carousel_img_1.png"
                      alt="Passwordless Authentication"
                      className="!h-auto min-w-[125px] rounded-r-2xl max-[480px]:!max-w-[125px]"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[1.125rem]  max-[400px]:text-[1rem] font-medium text-[#1a1288]">
                      Strong
                    </span>
                    <h3 className="!mb-4 text-2xl max-[400px]:!text-[1.5rem] font-bold">
                      Passwordless Authentication
                    </h3>
                    <p className="mb-6 max-[400px]:!text-[1rem] text-gray-600">
                      Eliminate credential phishing attacks while improving user
                      experience for your workforce and customers
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center !text-[#1a1288] font-medium "
                    >
                      <span className="hover:!underline">Learn More</span>
                      <span className="ml-1.5 text-[1.5em] ">►</span>
                    </a>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-row pl-[1.25rem] text-left items-center gap-8">
                  <div className="flex-1">
                    <span className="text-[1.125rem] max-[400px]:text-[1rem] font-medium text-[#1a1288]">
                      Comprehensive
                    </span>
                    <h3 className="!mb-4 text-2xl max-[400px]:!text-[1.5rem] font-bold">
                      Identity Verification
                    </h3>
                    <p className="mb-6 max-[400px]:!text-[1rem] text-gray-600">
                      Stop modern identity fraud ranging from account onboarding
                      and recovery to interview fraud and remote work
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center !text-[#1a1288] font-medium "
                    >
                      <span className="hover:!underline">Learn More</span>
                      <span className="ml-1.5  text-[1.5em] ">►</span>
                    </a>
                  </div>
                  <div>
                    <img
                      src="/hero_carousel_img_2.png"
                      alt="Identity Verification"
                      className="!h-auto min-w-[125px] rounded-l-2xl max-[480px]:!max-w-[125px]"
                    />
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-row  text-left pl-[0.25rem]  items-center gap-8">
                  <div>
                    <img
                      src="/hero_carousel_img_3.png"
                      alt="Access Management"
                      className="!h-auto min-w-[125px] rounded-r-2xl max-[480px]:!max-w-[125px]"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[1.125rem] max-[400px]:text-[1rem] font-medium text-[#1a1288]">
                      Continuous
                    </span>
                    <h3 className="!mb-4 text-2xl max-[400px]:!text-[1.5rem] font-bold">
                      Risk & Policy Orchestration
                    </h3>
                    <p className="mb-6 max-[400px]:!text-[1rem] text-gray-600">
                      Improve compliance with regulations and internal controls
                      while providing fewer clicks and less user pain
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center !text-[#1a1288] font-medium "
                    >
                      <span className="hover:!underline">Learn More</span>
                      <span className="ml-1.5  text-[1.5em] ">►</span>
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
          {[...Array(2)].map(() => (
            <>
              <li>
                <img
                  src="/company logos/Fiserv_logo.png"
                  alt="Fiserv"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/cvs-health-logo-stacked3.png"
                  alt="CVS Health"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/fido-alliance-logo-new.png"
                  alt="FIDO"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/frontier-credit-union-dark.png"
                  alt="Frontier CU"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/HCLogo-og.png"
                  alt="HC"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/logo-state_auto_insurance.png"
                  alt="State Auto"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/norwegian_air.png"
                  alt="Norwegian"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/rakuten_logo.png"
                  alt="Rakuten"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
              <li>
                <img
                  src="/company logos/UPG_RGB_Main_Blue.png"
                  alt="UPG"
                  className="w-40 h-40 object-contain rounded-lg"
                />
              </li>
            </>
          ))}
        </ul>
      </div>

      <section id="identity" className="w-full flex justify-center">
        <div className="flex flex-col w-full lg:flex-row gap-6 md:px-10 max-w-[calc(1178px+1rem)]">
          {/* Column 1 */}
          <div className="w-full flex !h-[100%] flex-col shrink-1 md:flex-row items-center lg:w-1/2 md:p-10 gap-6 bg-hypr-blue md:rounded-[20px]">
            <div className="w-full md:flex flex-col md:flex-row gap-6 items-center justify-center">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="../HYPR_Homepage_Workforce.webp"
                />
                <img
                  src="../workforce_mobile.png"
                  alt="Example 1"
                  className="sm:h-auto min-w-[100%] md:min-w-[160px] rounded-lg object-cover"
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

          <div className="w-full flex !h-[100%] flex-col shrink-1 md:flex-row items-center lg:w-1/2 md:p-10 gap-6 bg-yellow md:rounded-[20px]">
            <div className="w-full md:flex flex-col md:flex-row gap-6 items-center justify-center">
              <picture>
                <source
                  media="(min-width: 768px)"
                  srcSet="../HYPR_Homepage_Customer.png"
                />
                <img
                  src="../customer_mobile.png"
                  alt="Example 2"
                  className="sm:h-auto min-w-[100%] md:min-w-[160px] rounded-lg object-cover"
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
              <a className="button" href="#">
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
        <div className="wrapper mx-auto px-[1.25rem]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <h2 className="!mt-6 col-span-full text-center text-2xl font-semibold mb-2 lg:mb-6">
              The HYRP way
            </h2>

            {/* Card 1 */}
            <div className="flex flex-col gap-6 justify-between items-center rounded-lg bg-transparent px-3 py-8 text-blue w-full">
              <div className="flex gap-6 flex-col items-center">
                <img
                  src="../passkeyshield.webp"
                  alt="Passkey shield"
                  className="ml-[2rem] w-[206px] h-auto"
                />
                <h4 className="text-xl font-bold my-5 text-center">
                  No Shared <br /> Credentials
                </h4>
                <p className="max-w-[400px] text-sm text-white/80 text-center">
                  Phishing-resistant MFA from desktop to cloud built on proven
                  open standards with no password-based fallbacks
                </p>
              </div>
              {/* bottom spacer if needed (keeps equal spacing to CTA in other cards) */}
              <div className="mt-6 w-full text-center"></div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6 justify-between items-center rounded-lg bg-transparent px-3 py-8 w-full text-blue">
              <div className="flex flex-col gap-6 items-center">
                <img
                  src="/identitysecurity.webp"
                  alt="Identity security"
                  className="w-[246px] h-auto"
                />
                <h4 className="text-xl font-bold my-5 text-center">
                  Comprehensive <br /> Identity Security
                </h4>
                <p className="max-w-[400px] mb-6 text-sm text-white/80 text-center">
                  End-to-end identity security from day zero with unified
                  passwordless authentication, adaptive risk mitigation, and
                  automated identity verification
                </p>
              </div>

              <div className="CTA">
                {" "}
                <a className="button" href="#">
                  {" "}
                  SPEAK TO AN EXPERT{" "}
                </a>{" "}
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6 justify-between items-center rounded-lg bg-transparent px-3 py-8 w-full text-blue">
              <div className="flex gap-6 flex-col items-center">
                <img
                  src="../feature3.webp"
                  alt="Feature 3"
                  className="w-[187px] h-auto"
                />
                <h4 className="text-xl font-bold my-5 text-center">
                  Universal <br /> User Experience
                </h4>
                <p className="max-w-[400px] text-sm text-white/80 text-center">
                  Limitless authentication flows and continuous real-time risk
                  assessment to deliver a world-class experience for all users
                </p>
              </div>

              <div className="mt-6 w-full text-center"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center">
        <div className="max-w-[1300px] mx-auto rounded-2xl !pt-[4rem]">
          <div className="flex flex-col items-center max-w-[1200px] text-center text-black mb-12 px-4">
            <h2 className="text-[2.25rem] md:text-[3rem] md:text-4xl font-bold text-hypr-blue !mb-[1.5rem] max-w-[900px]">
              Customers Give HYPR Highest Ratings Across the Board
            </h2>
            <hr className="section__divider" />

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
            <div className="flex flex-col items-center px-[1rem] justify-center text-center md:items-start md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold !mt-[1.25rem] max-w-[500px] mx-auto md:mx-0">
                The HYPR Identity Assurance <br />
                Platform
              </h2>
              <p className="max-w-[470px] !my-[1.25rem] mx-auto md:mx-0">
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

              <div className="flex justify-center sm:justify-start !shrink-0">
                <a className="button" href="#">
                  MORE ABOUT THE HYRP PLATFORM
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="../platformHYPR.webp"
                alt="Secure Identity"
                className="w-full h-auto object-cover md:object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
