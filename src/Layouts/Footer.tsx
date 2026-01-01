export default function Footer() {
  return (
    <footer className="bg-off-black text-white">
      <section className="w-full pt-[2rem] md:pt-[5rem] pb-[0.9375rem]">
        <div className="flex align-center justify-center max-w-[1178px] !mx-auto !px-[1rem]">
          <div className="flex w-full md:w-auto flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-2/12 px-[0.75rem] text-left">
              <nav className="pb-[1.25rem] md:pb-[0.75rem]">
                <h4 className="">Platform</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Identity Assurance Platform</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span>HYRP Authenticate</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>HYRP Adapt</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>HYRP Affirm</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>HYRP Enterprise</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Integrations</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="pb-[1.25rem] md:pb-0">
                <nav>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Pricing</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-full md:w-3/12 px-[0.75rem] text-left">
              <nav className="pb-[1.25rem] md:pb-[0.75rem]">
                <h4>Solutions</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Workforce Access</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>For Your Customers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Cyber Insurance MFA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Deploy Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Call Center Identity Verification</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>PSD2 SCA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Zero Trust Authentication</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Critical Infrastructure</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Financial Services</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="footer-menu">
                <nav>
                  <ul className="flex flex-col gap-2">
                    <li className="pb-[0.5rem] md:pb-0">
                      <a href="#">
                        <span>Accesibility</span>
                      </a>
                    </li>
                    <li className="pb-[1.5rem] md:pb-0">
                      <a href="#">
                        <span>Vulnerability Disclosure</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-full md:w-2/12 px-[0.75rem] text-left">
              <nav className="pb-[1.25rem]">
                <h4>Resources</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Workforce Access</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>For Your Customers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Cyber Insurance MFA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Deploy Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Call Center Identity Verification</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="pb-[2.5rem] md:pb-0 ">
                <h4>Company</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Workforce Access</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>For Your Customers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Cyber Insurance MFA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Deploy Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Call Center Identity Verification</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-full md:w-5/12 px-[0.75rem] text-left">
              <div className="flex flex-col items-left gap-6 md:gap-12 justify-center md:ml-[15%]">
                <div className="flex flex-col gap-4">
                  {" "}
                  <h3>
                    See Why Identity Security Starts <br />
                    Here
                  </h3>
                  <a className="button">Get a demo</a>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="!border-none !mb-0">
                    Receive Updates and News from HYPR
                  </h4>
                  <div>
                    <form className="flex flex-col gap-4">
                      <input type="text" placeholder="Enter Your Email" />
                      <button className="submit">submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full border-t-[1px] border-white">
        <div className="flex  flex-col !mx-auto px-[1.25rem] max-w-[1178px]">
          <div className="flex flex-col-reverse mt-[1rem] sm:mt-0 sm:flex-row min-h-[95px] justify-between items-center">
            <div className="mt-[1rem] mb-[0.85rem] sm:mt-0 sm:mb-0">
             <a
  
  href="#"
  rel="home"
  aria-label="HYPR"
>
  <svg
      className="w-[90px] h-auto"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 499.52 133.49"
    role="img"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="267.18"
        y1="-32.07"
        x2="230.81"
        y2="174.19"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#796d97" />
        <stop offset="0.39" stopColor="#888592" />
        <stop offset="0.8" stopColor="#787583" />
        <stop offset="1" stopColor="#bfb1eb" />
      </linearGradient>
    </defs>

    <g>
      <path
        fill="url(#linear-gradient)"
        d="m28.87,0H0v133.49h28.87v-52.44l-19.53-25.67h19.53V0Zm55.54,0v55.38H28.87l18.69,25.67h36.85v52.44h28.87V0h-28.87Zm271.59,14.23c-9.66-9.45-21.15-14.23-34.54-14.23h-62.36v133.49h28.82v-39.47h33.54c13.39,0,24.88-4.72,34.54-14.23,9.71-9.5,14.54-20.42,14.54-32.86s-4.83-23.2-14.54-32.7Zm-21.57,47.82c-4.72,4.04-10.45,6.09-17.27,6.09h-29.24V25.72h29.24c6.67,0,12.39,2.05,17.16,6.09,4.78,4.04,7.19,9.08,7.19,15.12s-2.36,11.08-7.09,15.12Zm120.52,23.73c4.83-.53,9.55-1.63,14.23-3.31,4.62-1.73,9.13-4.09,13.54-7.19,4.36-3.04,7.87-7.24,10.5-12.44,2.62-5.25,3.94-11.13,3.94-17.69,0-8.08-1.57-15.17-4.62-21.21-3.1-5.98-7.3-10.66-12.65-14.02-5.41-3.31-11.34-5.83-17.9-7.45-6.51-1.63-13.65-2.47-21.36-2.47h-57.53v133.49h28.87v-59.68l54.54,59.68h33.02l-44.57-47.72Zm-16.48-22.36h-26.51V25.72h26.88c4.83,0,9.29.42,13.28,1.26,3.99.89,7.66,2.78,11.08,5.83,3.41,2.99,5.09,6.93,5.09,11.76s-1.73,8.77-5.2,11.76c-3.46,3.04-7.24,4.93-11.29,5.83-4.04.84-8.5,1.26-13.33,1.26ZM219,0l-32.02,41.94L156.48,0h-33.39l9.97,13.28,40.26,53.44v66.77h27.66v-65.35L251.23,0h-32.23Z"
      />
    </g>
  </svg>
</a>
            </div>
            <div className="flex flex-col-reverse sm:flex-row items-center gap-8">
              <nav>
                <ul className="flex flex-row gap-2">
                  <li>
                    <a href="#">Status</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                </ul>
              </nav>
              <nav className="border-b pb-8  !border-b-amber-50 sm:border-b-0 sm:pb-0">
                <ul className="flex  flex-row items-center gap-2">
                  <li>
                    <a href="#" aria-label="Facebook">
                      <img
                        src="/socials/facebook-svgrepo-com.svg"
                        alt="Facebook"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="Twitter">
                      <img
                        src="/socials/twitter-svgrepo-com.svg"
                        alt="Twitter"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <img
                        src="/socials/linkedin-svgrepo-com.svg"
                        alt="LinkedIn"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="YouTube">
                      <img
                        src="/socials/youtube1-svgrepo-com.svg"
                        alt="YouTube"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
